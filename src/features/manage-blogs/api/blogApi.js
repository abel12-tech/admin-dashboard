import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => `/blogs`,
    }),

    addBlogg: builder.mutation({
      query: (data) => ({
        url: `/blogs`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllBlogsQuery, useAddBloggMutation } = blogApi;
