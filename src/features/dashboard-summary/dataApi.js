import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants";
import { getTokenFromCookies } from "../../shared/getToken.mjs";


export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => `/dashboard/summary`,
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
      },
    }),
  }),
});

export const { useGetAllDataQuery } = dataApi;
