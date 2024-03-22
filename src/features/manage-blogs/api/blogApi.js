import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => `/blog`,
    }),
    getAllBlogCategories: builder.query({
      query: () => `/blog-category`,
    }),
    getBlogCategoryById: builder.query({
      query: (id) => ({
        url: `blog-category/${id}`,
      }),
    }),
    addBlog: builder.mutation({
      query: (data) => ({
        url: `/blog`,
        method: "POST",
        body: data,
      }),
    }),
    addBlogCategory: builder.mutation({
      query: (data) => ({
        url: `/blog-category`,
        method: "POST",
        body: data,
      }),
    }),
    updateBlogCategory: builder.mutation({
      query: (data) => ({
        url: `blog-category/${data._id}/`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetAllBlogCategoriesQuery,
  useAddBlogMutation,
  useAddBlogCategoryMutation,
  useUpdateBlogCategoryMutation,
  useGetBlogCategoryByIdQuery,
} = blogApi;
