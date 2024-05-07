import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const farmerApi = createApi({
  reducerPath: "farmerApi",
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
    getAllFarmers: builder.query({
      query: () => "/farmer",
      method: "GET",
    }),
    getFarmerInMyWarehouse: builder.query({
      query: () => "/farmer/in-my-warehouse",
      method: "GET",
    }),
    getPaymentMadeForFarmer: builder.query({
      query: () => "/payment-for-farmer",
      method: "GET",
    }),
    deletePaymentMade: builder.mutation({
      query: (id) => ({
        url: `/payment-for-farmer/${id}`,
        method: "DELETE",
      }),
    }),
    deleteFarmer: builder.mutation({
      query: (id) => ({
        url: `/farmer/${id}`,
        method: "DELETE",
      }),
    }),
    payforFarmer: builder.mutation({
      query: (data) => ({
        url: "/payment-for-farmer",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllFarmersQuery,
  useDeleteFarmerMutation,
  usePayforFarmerMutation,
  useGetPaymentMadeForFarmerQuery,
  useGetFarmerInMyWarehouseQuery,
  useDeletePaymentMadeMutation,
} = farmerApi;
