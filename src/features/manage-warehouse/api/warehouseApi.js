import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const warehouseApi = createApi({
  reducerPath: "warehouseApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllWarehouses: builder.query({
      query: () => `/warehouse`,
    }),
    getWarehouseById: builder.query({
      query: (id) => ({
        url: `/warehouse/${id}`,
      }),
    }),
    addWarehouse: builder.mutation({
      query: (data) => ({
        url: `/warehouse`,
        method: "POST",
        body: data,
      }),
    }),
    updateWarehouse: builder.mutation({
      query: (data) => ({
        url: `warehouse/${data._id}/`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllWarehousesQuery,
  useAddWarehouseMutation,
  useGetWarehouseByIdQuery,
  useUpdateWarehouseMutation,
} = warehouseApi;
