'use client';

import { AtButton } from '@/components/atoms/at-button/at-button';
import { AtInput } from '@/components/atoms/at-input/at-input';
import { MlImageCard } from '@/components/molecules/ml-image-card/ml-image-card';
import { useMemo, useState } from 'react';

export interface TmImageSearchProps {
  data: any;
  onSearch: (text: string) => void;
}

export const TmImageSearch = ({ data, onSearch }: TmImageSearchProps) => {
  const [searchText, setSearchText] = useState('');

  const images = useMemo(() => {
    if (!data) return [];
    return data?.response?.results ? data?.response?.results : data.response;
  }, [data]);

  const onClickTag = (text: string) => {
    console.log('Clicked on tag', text);
    // TODO Navigate to Tag page
  };

  const onClickSearch = () => {
    onSearch(searchText);
  };

  if (data === null) return <div>Loading...</div>;

  return (
    <div className="w-full">
      <h2 className="text-lg text-slate-800 font-semibold mb-4">
        Search by tag
      </h2>
      <div className="flex gap-4 mb-4">
        <AtInput
          value={searchText}
          onChangeValue={t => setSearchText(t)}
          className="w-3/4"
        />
        <AtButton onClick={onClickSearch} text="Search" />
      </div>
      <h2 className="text-lg text-slate-800 font-semibold mb-4">
        Trending Photos Right Now
      </h2>
      {data.errors ? (
        <div className="flex justify-center">
          <div>{data.errors[0]}</div>
          <div>Make sure to set your access token!</div>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-5 w-full">
          {images.map((photo: any) => (
            <li key={photo.id}>
              <MlImageCard photo={photo} onClickTag={onClickTag} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
