import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prepareHeaders } from 'utils';

export const baseUrl = process.env.REACT_APP_API_URL;

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders,
    // mode: 'no-cors'
  }),
  tagTypes: ['Pokemon'],
  endpoints: () => ({}),
});
