import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllAdmins: builder.query({
      query: () => `/admin`,
    }),
    addAdmin: builder.mutation({
      query: (data) => ({
        url: `/admin`,
        method: "POST",
        body: data,
      }),
    }),
    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "DELETE",
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `/admin/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllAdminsQuery,
  useAddAdminMutation,
  useLoginMutation,
  useDeleteAdminMutation,
} = authApi;
