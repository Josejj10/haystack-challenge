'use client';

import { MlImageCard } from '@/components/molecules/ml-image-card/ml-image-card';
import { useEffect, useState } from 'react';
import { unsplashClient } from '../services/unsplash-api';
import { TmImageSearch } from '@/components/templates/image-search/image-search';

export default function Home() {
  const [data, setPhotosResponse] = useState<any>(null);
  const photosPerPage = 5;

  const onSearch = (text: string) => {
    unsplashClient.search
      .getPhotos({ query: text, perPage: photosPerPage, page: 1 })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  };

  useEffect(() => {
    unsplashClient.photos
      .getRandom({ featured: true, count: photosPerPage })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-24">
      <TmImageSearch data={data} onSearch={onSearch} />
    </main>
  );
}
