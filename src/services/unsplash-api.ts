import { createApi } from 'unsplash-js';

export const unsplashClient = createApi({
  accessKey: process.env.UNSPLASH_KEY || '',
});
