import { Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
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
import Layout from "./shared/Layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <MainContent />
          </Layout>
        }
      />
      <Route
        path="/manage-products"
        element={
          <Layout>
            <ManageProducts />
          </Layout>
        }
      />
      <Route
        path="/manage-orders"
        element={
          <Layout>
            <ManageOrders />
          </Layout>
        }
      />
      <Route
        path="/manage-blogs"
        element={
          <Layout>
            <ManageBlogs />
          </Layout>
        }
      />
      <Route
        path="/edit-product"
        element={
          <Layout>
            <EditProduct />
          </Layout>
        }
      />
      <Route
        path="/add-blog"
        element={
          <Layout>
            <AddBlog />
          </Layout>
        }
      />
      <Route
        path="/edit-blog/:id"
        element={
          <Layout>
            <EditBlog />
          </Layout>
        }
      />
      <Route
        path="/manage-product-category"
        element={
          <Layout>
            <ManageProductCategories />
          </Layout>
        }
      />
      <Route
        path="/add-product-category"
        element={
          <Layout>
            <AddProductCategory />
          </Layout>
        }
      />
      <Route
        path="/manage-blog-category"
        element={
          <Layout>
            <ManageBlogCategory />
          </Layout>
        }
      />
      <Route
        path="/add-blog-category"
        element={
          <Layout>
            <AddBlogCategory />
          </Layout>
        }
      />
      <Route
        path="/edit-blog-category/:id"
        element={
          <Layout>
            <EditBlogCategory />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
