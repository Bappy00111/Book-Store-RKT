import { configureStore } from "@reduxjs/toolkit";
import { bookSliceApi } from "./features/boolSliceApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [bookSliceApi.reducerPath]: bookSliceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookSliceApi.middleware),
});
