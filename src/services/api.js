import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const barerToken = import.meta.env.VITE_TOKEN;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Contacts", "SingleContact"],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${barerToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url: "/contacts",
        params: {
          sort: "created:desc",
        },
      }),
      providesTags: (result = []) =>
        result && Array.isArray(result)
          ? [
              ...result.map(({ id }) => ({ type: "Contacts", id })),
              { type: "Contacts", id: "LIST" },
            ]
          : [{ type: "Contacts", id: "LIST" }],
    }),
    getSingleContact: builder.query({
      query: (id) => ({ url: `/contact/${id}` }),
      providesTags: (result = []) =>
        result && Array.isArray(result)
          ? [
              ...result.map(({ id }) => ({ type: "SingleContact", id })),
              { type: "SingleContact", id: "LIST" },
            ]
          : [{ type: "SingleContact", id: "LIST" }],
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: "/contact",
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    addTags: builder.mutation({
      query: ({ id, body }) => ({
        url: `contacts/${id}/tags`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "SingleContact", id: "LIST" }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetSingleContactQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useAddTagsMutation,
} = api;
