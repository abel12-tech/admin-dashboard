import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product`,
    }),
    getAllProductCategories: builder.query({
      query: () => `/product-category`,
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/product`,
        method: "POST",
        body: data,
      }),
    }),
    deleteProductCategory: builder.mutation({
      query: (categoryId) => ({
        url: `product-category/${categoryId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProductMutation ,useGetAllProductCategoriesQuery ,useDeleteProductCategoryMutation } = productsApi;
