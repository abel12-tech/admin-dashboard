import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: Cookies.get("token") || null,
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
  isSuper: JSON.parse(localStorage.getItem("isSuper")) || false,
  isAdmin: JSON.parse(localStorage.getItem("isAdmin")) || false,
  adminwarehouseInfo:
    JSON.parse(localStorage.getItem("adminwarehouseInfo")) || null,
  adminPhonenumber:
    JSON.parse(localStorage.getItem("adminPhonenumber")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log("payload", action.payload);
      state.token = action.payload.token;
      if (action.payload.admin.role === "Super Admin") {
        localStorage.setItem("isSuper", true);
        localStorage.setItem("isAdmin", false);
      } else {
        localStorage.setItem("isAdmin", true);
        localStorage.setItem("isSuper", false);
        localStorage.setItem(
          "adminwarehouseInfo",
          JSON.stringify(action.payload.admin.warehouse)
        );
        localStorage.setItem(
          "adminPhonenumber",
          JSON.stringify(action.payload.admin.phoneNumber)
        );
      }
      localStorage.setItem("isAuthenticated", true);
      Cookies.set("token", state.token);
    },
    logout: (state) => {
      state.token = null;
      localStorage.setItem("isAuthenticated", false);
      localStorage.setItem("isSuper", false);
      localStorage.setItem("isAdmin", false);
      Cookies.remove("token");
    },
  },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectIsSuper = (state) => state.auth.isSuper;
export const selectIsAdmin = (state) => state.auth.isAdmin;
export const selectAdminwarehouseInfo = (state) =>
  state.auth.adminwarehouseInfo;
export const selectAdminPhoneNumber = (state) => state.auth.adminPhonenumber;
