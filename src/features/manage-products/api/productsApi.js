import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const productsApi = createApi({
  reducerPath: "productsApi",
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
    getAllProducts: builder.query({
      query: () => "/product",
    }),
    getProductsInWarehouse: builder.query({
      query: () => "/product/filter/in-my-warehouse/",
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
    }),
    getAllProductCategories: builder.query({
      query: () => "/product-category",
    }),
    getProductCategoryById: builder.query({
      query: (id) => ({
        url: `/product-category/${id}`,
      }),
    }),
    addProductCategory: builder.mutation({
      query: (data) => ({
        url: "/product-category",
        method: "POST",
        body: data,
      }),
    }),
    deleteProductCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/product-category/${categoryId}`,
        method: "DELETE",
      }),
    }),
    updateProductCategory: builder.mutation({
      query: (data) => ({
        url: `/product-category/${data._id}/`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/product/${data._id}/`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
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
  useGetProductsInWarehouseQuery,
} = productsApi;
