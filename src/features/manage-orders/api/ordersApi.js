import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers) => {
      const token = getTokenFromCookies();
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => "/order",
      method: "GET",
    }),
    getOrdersInMyWarehouse: builder.query({
      query: () => "/order/in-my-warehouse/",
      method: "GET",
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
      },
    }),
    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `/order/${orderId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useDeleteOrderMutation,
  useGetOrdersInMyWarehouseQuery,
} = ordersApi;
