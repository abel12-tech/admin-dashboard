import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants";
import { getTokenFromCookies } from "../../shared/getToken.mjs";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers) => {
      const token = getTokenFromCookies();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => `/dashboard/summary`,
    }),
    getDataInWarehouse: builder.query({
      query: () => `/dashboard/summary-in-my-warehouse`,
    }),
  }),
});

export const { useGetAllDataQuery, useGetDataInWarehouseQuery } = dataApi;
