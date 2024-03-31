import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product`,
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
      },
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
    }),
    getAllProductCategories: builder.query({
      query: () => `/product-category`,

    }),
    getProductCategoryById: builder.query({
      query: (id) => ({
        url: `/product-category/${id}`,
      }),
    }),
    addProductCategory: builder.mutation({
      query: (data) => ({
        url: `/product-category`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    deleteProductCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/product-category/${categoryId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    updateProductCategory: builder.mutation({
      query: (data) => ({
        url: `/product-category/${data._id}/`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/product/${data._id}/`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllProductCategoriesQuery,
  useDeleteProductCategoryMutation,
  useAddProductCategoryMutation,
  useUpdateProductCategoryMutation,
  useGetProductCategoryByIdQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery,
} = productsApi;
