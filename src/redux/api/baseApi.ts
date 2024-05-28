import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
    credentials: "include",
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["category", "user"],
});
