import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";


export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => `/orders`,
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
      },
    }),

    addOrders: builder.mutation({
      query: (data) => ({
        url: `/orders`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
  }),
});

export const { useGetAllOrdersQuery, useAddOrdersMutation } = ordersApi;
