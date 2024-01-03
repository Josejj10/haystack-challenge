'use client';

import { ITEMS_PER_PAGE } from '@/app/constants/paginations';
import { MlHeader } from '@/components/molecules/ml-header/ml-header';
import { TmImageSearch } from '@/components/templates/image-search/image-search';
import { unsplashClient } from '@/services/unsplash-api';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export default function TagPage({
  params: { tag: encodedTag },
}: {
  params: { tag: string };
}) {
  const tag = useMemo(() => decodeURI(encodedTag), [encodedTag]);
  const [data, setPhotosResponse] = useState<any>(null);
  const router = useRouter();

  const onSearch = (text: string) => {
    if (text.length === 0) return;
    router.push(`/tags/${text}`);
  };

  useEffect(() => {
    if (tag.length === 0) return;
    unsplashClient.search
      .getPhotos({ query: tag, perPage: ITEMS_PER_PAGE, page: 1 })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, [tag]);

  return (
    <>
      <MlHeader />
      <main className="flex min-h-screen flex-col items-center justify-start p-4 md:px-24">
        <TmImageSearch
          data={data}
          onSearch={onSearch}
          defaultSearchText={tag}
        />
      </main>
    </>
  );
}
