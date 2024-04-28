import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const farmerApi = createApi({
  reducerPath: "farmerApi",
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
    getAllFarmers: builder.query({
      query: () => "/farmer",
      method: "GET",
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
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllFarmersQuery,
  useDeleteFarmerMutation,
  usePayforFarmerMutation,
} = farmerApi;
