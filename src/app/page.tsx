'use client';

import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { unsplashClient } from '../services/unsplash-api';

export default function Home() {
  const [data, setPhotosResponse] = useState<any>(null);

  useEffect(() => {
    console.log(process.env);
    console.log(process.env.UNSPLASH_KEY);
    unsplashClient.photos
      .getRandom({ featured: true, count: 1 })
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
      <h1 className="text-2xl font-bold mb-4">Using Unsplash API</h1>
      {data.errors ? (
        <div className="flex justify-center">
          <div>{data.errors[0]}</div>
          <div>Make sure to set your access token!</div>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-3">
          {data.response.map((photo: any) => (
            <li key={photo.id} className="li">
              <Fragment>
                <Image
                  className="img"
                  src={photo.urls.regular}
                  alt={photo.description}
                  width={200}
                  height={200}
                />
                <a
                  className="credit"
                  target="_blank"
                  href={`https://unsplash.com/@${photo.user.username}`}>
                  {photo.user.name}
                </a>
              </Fragment>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
