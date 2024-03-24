import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product`,
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/product`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProductMutation } = productsApi;
