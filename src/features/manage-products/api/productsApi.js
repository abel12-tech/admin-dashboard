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
    getAllProductCategories: builder.query({
      query: () => `/product-category`,
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
      },
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/product`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
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
        url: `product-category/${categoryId}`,
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
  useAddProductMutation,
  useGetAllProductCategoriesQuery,
  useDeleteProductCategoryMutation,
  useAddProductCategoryMutation,
} = productsApi;
