import { AtTag, AtTagProps } from '@/components/atoms/at-tag/at-tag';
import { formatISODate } from '@/components/utils/formatDate';
import Image from 'next/image';
import { useMemo } from 'react';
import type { Basic, Random } from 'unsplash-js/dist/methods/photos/types';

export interface MlImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  photo: Random | Basic;
  onClickTag: (text: string) => void;
}

export const MlImageCard = ({
  photo,
  onClickTag,
  ...props
}: MlImageCardProps) => {
  const tags = useMemo<AtTagProps[]>(() => {
    // Test Tags
    // return [
    //   {
    //     title: 'cabin',
    //   },
    //   {
    //     title: 'trees',
    //   },
    //   {
    //     title: 'b+w',
    //   },
    // ];

    return (photo as any).current_user_collections.map((collection: any) => ({
      text: collection.title,
    }));
  }, [photo]);

  const createdAt = useMemo(() => {
    return formatISODate(photo.created_at);
  }, [photo]);

  return (
    <div
      {...props}
      className="relative py-3 px-2 border-white rounded-sm text-white">
      <Image
        className="w-full h-80 object-cover"
        src={photo.urls.regular}
        alt={photo?.description || ''}
        width={300}
        height={300}
      />
      <div className="absolute bottom-0 w-full flex justify-between items-center px-2 py-3 bg-black opacity-70">
        <div className="text-white">
          <span>
            by{' '}
            <a
              className="font-bold"
              target="_blank"
              href={`https://unsplash.com/@${photo.user.username}`}>
              {photo.user.name}
            </a>
          </span>
          <p>Taken on {createdAt}</p>
        </div>
        <ul className="flex justify-center w-[33%] gap-3">
          {tags.slice(0, 3).map((tag: any) => (
            <li key={tag.id}>
              <AtTag {...tag} onClick={() => onClickTag(tag.title)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
