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
      query: () => ({
        url:'/contacts',
        params: {
          sort: 'created:desc',
        },
      }),
    }),
    getSingleContact: builder.query({
      query: (id) => ({ url: `/contact/${id}` 
      }),
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: '/contact',
        method: 'POST',
        body: newContact,
      }),
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetContactsQuery, useGetSingleContactQuery, useDeleteContactMutation, useAddContactMutation } = api;

