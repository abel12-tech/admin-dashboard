import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./features/manage-products/api/productsApi";
import { ordersApi } from "./features/manage-orders/api/ordersApi";
import { blogApi } from "./features/manage-blogs/api/blogApi";
import blogCategorySliceReducer from "./features/manage-blogs/slice/blogCategorySlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    blogCategory: blogCategorySliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      ordersApi.middleware,
      blogApi.middleware
    ),
});

setupListeners(store.dispatch);
