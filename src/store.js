import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./features/manage-products/api/productsApi";
import { ordersApi } from "./features/manage-orders/api/ordersApi";
import { blogApi } from "./features/manage-blogs/api/blogApi";
import blogSliceReducer from "./features/manage-blogs/slice/blogSlice";
import { authApi } from "./features/authentication/api/authApi";
import authSliceReducer, {
  logout,
} from "./features/authentication/slice/authSlice.js";
import { warehouseApi } from "./features/manage-warehouse/api/warehouseApi";
import { dataApi } from "./features/dashboard-summary/dataApi";
import { usersApi } from "./features/manage-users/api/usersApi";
import { paymentApi } from "./features/manage-payments/api/paymentApi";
import { farmerApi } from "./features/manage-farmers/api/farmerApi";
import { contactApi } from "./features/contact/api/contactApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [warehouseApi.reducerPath]: warehouseApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [farmerApi.reducerPath]: farmerApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
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
      paymentApi.middleware,
      dataApi.middleware,
      usersApi.middleware,
      farmerApi.middleware,
      contactApi.middleware
    ),
  devTools: true,
});

setupListeners(store.dispatch);
const handleLogout = () => {
  const state = store.getState().auth.token;
  if (state === null && store.getState().auth.isAuthenticated) {
    store.dispatch(logout());
  }
};
handleLogout();
const unsubscribe = store.subscribe(handleLogout);

unsubscribe();
