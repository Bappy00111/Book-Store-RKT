// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookSliceApi = createApi({
  reducerPath: "bookSliceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),

  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => `/books`,
      keepUnusedDataFor: 600,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBookQuery } = bookSliceApi;
