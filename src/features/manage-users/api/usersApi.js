import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";
import { BASE_URL } from "../../../constants";



export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/user`,
      method:"GET",
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
      },
    }),
  }),
});

export const {useGetAllUsersQuery} = usersApi;
