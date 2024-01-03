'use client';

import { MlImageCard } from '@/components/molecules/ml-image-card/ml-image-card';
import { useEffect, useState } from 'react';
import { unsplashClient } from '../services/unsplash-api';

export default function Home() {
  const [data, setPhotosResponse] = useState<any>(null);

  const onClickTag = (text: string) => {
    console.log(text);
  };

  useEffect(() => {
    unsplashClient.photos
      .getRandom({ featured: true, count: 10 })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);

  if (data === null) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-2xl font-bold mb-4">Trending Photos Right Now</h1>
      {data.errors ? (
        <div className="flex justify-center">
          <div>{data.errors[0]}</div>
          <div>Make sure to set your access token!</div>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-3 w-full">
          {data.response.map((photo: any) => (
            <li key={photo.id}>
              <MlImageCard photo={photo} onClickTag={onClickTag} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
