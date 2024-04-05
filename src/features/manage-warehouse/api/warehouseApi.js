import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const warehouseApi = createApi({
  reducerPath: "warehouseApi",
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
    getAllWarehouses: builder.query({
      query: () => "/warehouse",
    }),
    getWarehouseById: builder.query({
      query: (id) => ({
        url: `/warehouse/${id}`,
      }),
    }),
    addWarehouse: builder.mutation({
      query: (data) => ({
        url: "/warehouse",
        method: "POST",
        body: data,
      }),
    }),
    updateWarehouse: builder.mutation({
      query: (data) => ({
        url: `/warehouse/${data._id}/`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteWarehouse: builder.mutation({
      query: (id) => ({
        url: `/warehouse/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllWarehousesQuery,
  useAddWarehouseMutation,
  useGetWarehouseByIdQuery,
  useUpdateWarehouseMutation,
  useDeleteWarehouseMutation,
} = warehouseApi;
