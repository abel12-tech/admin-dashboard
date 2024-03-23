import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { selectToken } from "../../authentication/slice/authSlice"; // Import selectToken from your authSlice

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  prepareHeaders: (headers, { getState }) => {
    const token = selectToken(getState());
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
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
  useAddBlogCategoryMutation,
  useUpdateBlogCategoryMutation,
  useGetBlogCategoryByIdQuery,
  useDeleteBlogCategoryMutation,
} = blogApi;
