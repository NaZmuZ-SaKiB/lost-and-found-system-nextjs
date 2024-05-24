import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: "/categories",
      }),
      providesTags: ["category"],
      transformResponse: (response: any) => {
        if (response.success) {
          return response.data;
        } else {
          return [];
        }
      },
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoryApi;
