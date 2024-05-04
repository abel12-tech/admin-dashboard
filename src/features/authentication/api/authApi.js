import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      console.log("Original headers:", headers);
      const token = getTokenFromCookies();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllAdmins: builder.query({
      query: () => `/admin`,
    }),
    getAdminProfile: builder.query({
      query: () => `/admin/profile/`,
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
  useGetAdminProfileQuery,
} = authApi;
