import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const barerToken = import.meta.env.VITE_TOKEN;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${barerToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/contacts',
    }),
    getSingleContact: builder.query({
      query: (id) => ({ url: `/contact/${id}` }),
    })
    // Здесь можно добавить другие эндпоинты (POST, PUT, DELETE, PATCH)
  }),
});

export const { useGetContactsQuery, useGetSingleContactQuery } = api;

