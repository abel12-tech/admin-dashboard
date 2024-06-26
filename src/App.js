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
import {
  selectIsAdmin,
  selectIsAuthenticated,
  selectIsSuper,
} from "./features/authentication/slice/authSlice";
import { useSelector } from "react-redux";
import AddWarehouse from "./features/manage-warehouse/pages/AddWarehouse";
import ManageWareHouses from "./features/manage-warehouse/pages/ManageWareHouses";
import EditWarehouse from "./features/manage-warehouse/pages/EditWarehouse";
import EditProductCategory from "./features/manage-products/pages/EditProductCategory";
import ManageUsers from "./features/manage-users/pages/ManageUsers";
import Profile from "./features/authentication/pages/Profile";
import ManagePayments from "./features/manage-payments/pages/ManagePayments";
import ManageFarmers from "./features/manage-farmers/page/ManageFarmers";
import ManagePaymentOrgs from "./features/manage-payments/pages/ManagePaymentOrgs";
import AddPaymentOrg from "./features/manage-payments/pages/AddPaymentOrg";
import ContactFarmer from "./features/contact/pages/ContactFarmer";
import OrderInMyWarehouse from "./features/admin-only/pages/OrderInMyWarehouse";
import ManageAdmins from "./features/authentication/pages/ManageAdmins";
import AddAdmin from "./features/authentication/pages/AddAdmin";
import EditPaymentOrg from "./features/manage-payments/pages/EditPaymentOrg";
import ContactAdmin from "./features/contact/pages/ContactAdmin";
import PaymentMadeForFarmer from "./features/manage-payments/pages/PaymentMadeForFarmer";
import UpdateProfile from "./features/authentication/pages/UpdateProfile";
import FarmerInMyWarehouse from "./features/admin-only/pages/FarmerInMyWarehouse";
import ContactOtherAdmin from "./features/contact/pages/ContactOtherAdmin";
import ProductsInMyWarehouse from "./features/admin-only/pages/ProductsInMyWarehouse";
import PaymentMadeForFarmerInMyWarehouse from "./features/admin-only/pages/PaymentMadeForFarmerInMyWarehouse";
import PaymentInMyWarehouse from "./features/admin-only/pages/PaymentInMyWarehouse";

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isSuper = useSelector(selectIsSuper);
  const isAdmin = useSelector(selectIsAdmin);

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
        path="/contact-farmer"
        element={
          isAuthenticated ? (
            <Layout>
              <ContactFarmer />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/payment-for-farmer"
        element={
          isAuthenticated && isSuper ? (
            <Layout>
              <PaymentMadeForFarmer />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/payment-for-farmer-in-my-warehouse"
        element={
          isAuthenticated && isAdmin ? (
            <Layout>
              <PaymentMadeForFarmerInMyWarehouse />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/contact-admins"
        element={
          isAuthenticated && isSuper ? (
            <Layout>
              <ContactAdmin />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/contact-other-admins"
        element={
          isAuthenticated && isAdmin ? (
            <Layout>
              <ContactOtherAdmin />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-products"
        element={
          isAuthenticated && isSuper ? (
            <Layout>
              <ManageProducts />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-product-in-my-warehouse"
        element={
          isAuthenticated && isAdmin ? (
            <Layout>
              <ProductsInMyWarehouse />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-orders"
        element={
          isAuthenticated && isSuper ? (
            <Layout>
              <ManageOrders />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-order-in-my-warehouse"
        element={
          isAuthenticated && isAdmin ? (
            <Layout>
              <OrderInMyWarehouse />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-admins"
        element={
          isAuthenticated && isSuper ? (
            <Layout>
              <ManageAdmins />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/add-admin"
        element={
          isAuthenticated && isSuper ? (
            <Layout>
              <AddAdmin />
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
          isAuthenticated && isSuper ? (
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
          isAuthenticated && isSuper ? (
            <Layout>
              <ManageFarmers />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-farmer-we-work-with"
        element={
          isAuthenticated && isAdmin ? (
            <Layout>
              <FarmerInMyWarehouse />
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
        path="/update-profile/:id"
        element={
          isAuthenticated ? (
            <Layout>
              <UpdateProfile />
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
        path="/edit-payment-org/:id"
        element={
          isAuthenticated ? (
            <Layout>
              <EditPaymentOrg />
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
          isAuthenticated && isSuper ? (
            <Layout>
              <ManagePayments />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/manage-payment-in-my-warehouse"
        element={
          isAuthenticated && isAdmin ? (
            <Layout>
              <PaymentInMyWarehouse />
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
