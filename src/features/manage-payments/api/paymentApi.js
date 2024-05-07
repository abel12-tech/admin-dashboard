import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
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
    getAllPayments: builder.query({
      query: () => "/payment",
      method: "GET",
    }),
    getAllPaymentOrgs: builder.query({
      query: () => "/payment-org",
      method: "GET",
    }),
    getPaymentOrgById: builder.query({
      query: (id) => `/payment-org/${id}`,
      method: "GET",
    }),
    deletePaymentOrg: builder.mutation({
      query: (id) => ({
        url: `payment-org/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    updatePaymentOrg: builder.mutation({
      query: (data) => ({
        url: `payment-org/${data._id}/`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
        },
      }),
    }),
    addPaymentOrg: builder.mutation({
      query: (data) => ({
        url: `/payment-org`,
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
  useGetAllPaymentsQuery,
  useGetAllPaymentOrgsQuery,
  useDeletePaymentOrgMutation,
  useUpdatePaymentOrgMutation,
  useAddPaymentOrgMutation,
  useGetPaymentOrgByIdQuery,
} = paymentApi;
