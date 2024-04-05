import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./features/manage-products/api/productsApi";
import { ordersApi } from "./features/manage-orders/api/ordersApi";
import { blogApi } from "./features/manage-blogs/api/blogApi";
import blogSliceReducer from "./features/manage-blogs/slice/blogSlice";
import { authApi } from "./features/authentication/api/authApi";
import authSliceReducer from "./features/authentication/slice/authSlice.js";
import { warehouseApi } from "./features/manage-warehouse/api/warehouseApi";
import { dataApi } from "./features/dashboard-summary/dataApi";
import { usersApi } from "./features/manage-users/api/usersApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [warehouseApi.reducerPath]: warehouseApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
    blogs: blogSliceReducer,
    auth: authSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      ordersApi.middleware,
      blogApi.middleware,
      authApi.middleware,
      warehouseApi.middleware,
      dataApi.middleware,
      usersApi.middleware,
    ),
  devTools: true,
});

setupListeners(store.dispatch);
