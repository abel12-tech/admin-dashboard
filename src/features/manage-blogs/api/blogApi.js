import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getTokenFromCookies();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
      }),
    }),
    addBlog: builder.mutation({
      query: (data) => ({
        url: `/blog`,
        method: "POST",
        body: data,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `blog/${blogId}`,
        method: "DELETE",
      }),
    }),
    updateBlog: builder.mutation({
      query: (data) => ({
        url: `blog/${data._id}/`,
        method: "PATCH",
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
    deleteBlogCategory: builder.mutation({
      query: (categoryId) => ({
        url: `blog-category/${categoryId}`,
        method: "DELETE",
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
