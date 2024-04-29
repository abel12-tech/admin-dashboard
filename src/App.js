import { Navigate, Route, Routes } from "react-router-dom";
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
import { selectIsAuthenticated } from "./features/authentication/slice/authSlice";
import { useSelector } from "react-redux";
import AddWarehouse from "./features/manage-warehouse/pages/AddWarehouse";
import ManageWareHouses from "./features/manage-warehouse/pages/ManageWareHouses";
import EditWarehouse from "./features/manage-warehouse/pages/EditWarehouse";
import EditProductCategory from "./features/manage-products/pages/EditProductCategory";
import ManageUsers from "./features/manage-users/pages/ManageUsers";
import Profile from "./features/manage-users/pages/Profile";
import ManagePayments from "./features/manage-payments/pages/ManagePayments";
import ManageFarmers from "./features/manage-farmers/page/ManageFarmers";
import ManagePaymentOrgs from "./features/manage-payments/pages/ManagePaymentOrgs";
import AddPaymentOrg from "./features/manage-payments/pages/AddPaymentOrg";

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Layout>
              <MainContent />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-products"
        element={
          isAuthenticated ? (
            <Layout>
              <ManageProducts />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-orders"
        element={
          isAuthenticated ? (
            <Layout>
              <ManageOrders />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-blogs"
        element={
          isAuthenticated ? (
            <Layout>
              <ManageBlogs />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/add-blog"
        element={
          isAuthenticated ? (
            <Layout>
              <AddBlog />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-warehouse"
        element={
          isAuthenticated ? (
            <Layout>
              <ManageWareHouses />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-users"
        element={
          isAuthenticated ? (
            <Layout>
              <ManageUsers />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-farmers"
        element={
          isAuthenticated ? (
            <Layout>
              <ManageFarmers />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/profile"
        element={
          isAuthenticated ? (
            <Layout>
              <Profile />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/add-warehouse"
        element={
          isAuthenticated ? (
            <Layout>
              <AddWarehouse />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/edit-product/:id"
        element={
          isAuthenticated ? (
            <Layout>
              <EditProduct />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/edit-warehouse/:id"
        element={
          isAuthenticated ? (
            <Layout>
              <EditWarehouse />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/edit-blog/:id"
        element={
          isAuthenticated ? (
            <Layout>
              <EditBlog />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-product-category"
        element={
          isAuthenticated ? (
            <Layout>
              <ManageProductCategories />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/add-product-category"
        element={
          isAuthenticated ? (
            <Layout>
              <AddProductCategory />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-blog-category"
        element={
          isAuthenticated ? (
            <Layout>
              <ManageBlogCategory />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/add-payment-org"
        element={
          isAuthenticated ? (
            <Layout>
              <AddPaymentOrg />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-payments"
        element={
          isAuthenticated ? (
            <Layout>
              <ManagePayments />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-payment-organizations"
        element={
          isAuthenticated ? (
            <Layout>
              <ManagePaymentOrgs />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/add-blog-category"
        element={
          isAuthenticated ? (
            <Layout>
              <AddBlogCategory />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/edit-blog-category/:id"
        element={
          isAuthenticated ? (
            <Layout>
              <EditBlogCategory />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/edit-product-category/:id"
        element={
          isAuthenticated ? (
            <Layout>
              <EditProductCategory />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
