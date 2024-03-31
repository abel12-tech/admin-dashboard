import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";


export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => `/blog`,
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
      },
    }),
    getBlogById: builder.query({
      query: (id) => ({
        url: `/blog/${id}`,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    getAllBlogCategories: builder.query({
      query: () => `/blog-category`,
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
      },
    }),
    getBlogCategoryById: builder.query({
      query: (id) => ({
        url: `/blog-category/${id}`,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    addBlog: builder.mutation({
      query: (data) => ({
        url: `/blog`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `blog/${blogId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    updateBlog: builder.mutation({
      query: (data) => ({
        url: `blog/${data._id}/`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    addBlogCategory: builder.mutation({
      query: (data) => ({
        url: `/blog-category`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    updateBlogCategory: builder.mutation({
      query: (data) => ({
        url: `blog-category/${data._id}/`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    deleteBlogCategory: builder.mutation({
      query: (categoryId) => ({
        url: `blog-category/${categoryId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetAllBlogCategoriesQuery,
  useAddBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useAddBlogCategoryMutation,
  useUpdateBlogCategoryMutation,
  useGetBlogCategoryByIdQuery,
  useGetBlogByIdQuery,
  useDeleteBlogCategoryMutation,
} = blogApi;
