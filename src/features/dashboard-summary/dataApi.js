import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => `/dashboard/summary`,
    }),
  }),
});

export const { useGetAllDataQuery } = dataApi;
