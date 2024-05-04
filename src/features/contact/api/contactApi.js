import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const contactApi = createApi({
  reducerPath: "contactApi",
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
    contactFarmer: builder.mutation({
      query: (data) => ({
        url: `/contact-farmer`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    contactAdmin: builder.mutation({
      query: (data) => ({
        url: `/contact-admin`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
  }),
});

export const { useContactFarmerMutation, useContactAdminMutation } = contactApi;
