import type { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';

export const prepareHeaders = (headers: Headers): MaybePromise<Headers> => {
  const token = localStorage.getItem('token');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  headers.set('Accept-Language', localStorage.getItem('language') || 'en');
  return headers;
};
