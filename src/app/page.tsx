'use client';

import { useEffect, useState } from 'react';
import { unsplashClient } from '../services/unsplash-api';
import { TmImageSearch } from '@/components/templates/image-search/image-search';
import { MlHeader } from '@/components/molecules/ml-header/ml-header';
import { useRouter } from 'next/navigation';
import { ITEMS_PER_PAGE } from './constants/paginations';

export default function Home() {
  const [data, setPhotosResponse] = useState<any>(null);
  const router = useRouter();

  const onSearch = (text: string) => {
    if (text.length === 0) return;
    router.push(`/tags/${text}`);
  };

  useEffect(() => {
    unsplashClient.photos
      .getRandom({ featured: true, count: ITEMS_PER_PAGE })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);

  return (
    <>
      <MlHeader />
      <main className="flex min-h-screen flex-col items-center justify-start p-4 md:px-24">
        <TmImageSearch data={data} onSearch={onSearch} />
      </main>
    </>
  );
}
