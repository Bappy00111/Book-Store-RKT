// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookSliceApi = createApi({
  reducerPath: "bookSliceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),

  tagTypes: ["books"],

  endpoints: (builder) => ({
    // get all books
    getBook: builder.query({
      query: () => `/books`,
      keepUnusedDataFor: 600,
      providesTags: ["books"],
    }),

    // Add post
    addBook: builder.mutation({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["books"],
    }),

    // edit books
    editBook: builder.mutation({
      query: ({ id, book }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: book,
      }),
      invalidatesTags: ["books"],
    }),

    // delet method
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBookQuery, useAddBookMutation, useEditBookMutation ,useDeleteBookMutation} =
  bookSliceApi;
