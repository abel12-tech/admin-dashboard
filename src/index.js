import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageProducts from "./features/manage-products/pages/ManageProducts";
import ManageOrders from "./features/manage-orders/pages/ManageOrders";
import ManageBlogs from "./features/manage-blogs/pages/ManageBlogs";
import AddBlog from "./features/manage-blogs/pages/AddBlog";
import EditProduct from "./features/manage-products/pages/EditProduct";
import EditBlog from "./features/manage-blogs/pages/EditBlog";
import ManageProductCategories from "./features/manage-products/pages/ManageProductCategories";
import AddProductCategory from "./features/manage-products/pages/AddProductCategory";
import ManageBlogCategory from "./features/manage-blogs/pages/ManageBlogCategory";
import AddBlogCategory from "./features/manage-blogs/pages/AddBlogCategory";
import EditBlogCategory from "./features/manage-blogs/pages/EditBlogCategory";
import Login from "./features/authentication/pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/manage-products" element={<ManageProducts />} />
          <Route path="/manage-orders" element={<ManageOrders />} />
          <Route path="/manage-blogs" element={<ManageBlogs />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
          <Route
            path="/manage-product-category"
            element={<ManageProductCategories />}
          />
          <Route
            path="/add-product-category"
            element={<AddProductCategory />}
          />
          <Route
            path="/manage-blog-category"
            element={<ManageBlogCategory />}
          />
          <Route path="/add-blog-category" element={<AddBlogCategory />} />
          <Route
            path="/edit-blog-category/:id"
            element={<EditBlogCategory />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
