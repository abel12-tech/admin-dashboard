import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";


export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => `/order`,
      method:"GET",
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
      },
    }),
  }),
});

export const { useGetAllOrdersQuery, useDeleteOrderMutation } = ordersApi;
