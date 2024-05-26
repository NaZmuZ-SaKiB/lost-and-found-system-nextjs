import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (params) => ({
        url: "/",
        method: "GET",
        credentials: "include",
        params,
      }),
      providesTags: ["user"],
      transformResponse: (response: any) => {
        if (response.success) {
          return { users: response?.data, meta: response?.meta };
        } else {
          return { users: [], meta: null };
        }
      },
    }),

    updateUserStatus: builder.mutation({
      query: (data) => ({
        url: `/change-status/${data?.id}`,
        body: data?.data,
        method: "PATCH",
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    toggleUserRole: builder.mutation({
      query: (id: string) => ({
        url: `/toggle-role/${id}`,
        method: "PATCH",
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
  useToggleUserRoleMutation,
} = userApi;