import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../shared/darkModeContext";
import { MdOutlineDashboard } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";
import { BsBorderStyle } from "react-icons/bs";
import { GrBlog } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { MdOutlineWarehouse } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { GoOrganization } from "react-icons/go";

const Sidebar = ({ isSideMenuOpen }) => {
  const [activeLink, setActiveLink] = useState("/");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const { isDarkMode } = useDarkMode();
  return (
    <aside
      className={`${
        isSideMenuOpen ? "block" : "hidden"
      } z-20 w-64 overflow-y-auto ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } md:block flex-shrink-0`}
    >
      <div className={`py-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
        {/* Logo */}
        <Link
          to="/"
          className={`ml-6 text-lg font-bold ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Admin Dashboard
        </Link>

        {/* Navigation links */}
        <ul className="mt-6">
          <li className="relative px-6 py-3">
            {activeLink === "/" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                isDarkMode
                  ? "text-gray-100 dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <MdOutlineDashboard className="w-5 h-5" />

              <span className="ml-4">Dashboard</span>
            </Link>
          </li>
        </ul>
        {/* More navigation links */}
        <ul>
          <li className="relative px-6 py-3">
            {activeLink === "/manage-products" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <Link
              to="/manage-products"
              onClick={() => handleLinkClick("/manage-products")}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <RiProductHuntLine className="w-5 h-5" />

              <span className="ml-4">Manage Products</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            {activeLink === "/manage-product-category" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <Link
              to="/manage-product-category"
              onClick={() => handleLinkClick("/manage-product-category")}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <MdOutlineCategory className="w-5 h-5" />

              <span className="ml-4">Manage Product Categories</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            {activeLink === "/manage-orders" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <Link
              to="/manage-orders"
              onClick={() => handleLinkClick("/manage-orders")}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <BsBorderStyle className="w-5 h-5" />

              <span className="ml-4">Manage Orders</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            {activeLink === "/manage-blogs" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <Link
              to="/manage-blogs"
              onClick={() => handleLinkClick("/manage-blogs")}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <GrBlog className="w-5 h-5" />

              <span className="ml-4">Manage Blogs</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            {activeLink === "/manage-blog-category" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <Link
              to="/manage-blog-category"
              onClick={() => handleLinkClick("/manage-blog-category")}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <BiCategoryAlt className="w-5 h-5" />

              <span className="ml-4">Manage Blog Category</span>
            </Link>
          </li>

          <li className="relative px-6 py-3">
            {activeLink === "/manage-warehouse" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <Link
              to="/manage-warehouse"
              onClick={() => handleLinkClick("/manage-warehouse")}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <MdOutlineWarehouse className="w-5 h-5" />

              <span className="ml-4">Manage Warehouses</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            {activeLink === "/manage-users" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <Link
              to="/manage-users"
              onClick={() => handleLinkClick("/manage-users")}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <FiUsers className="w-5 h-5" />

              <span className="ml-4">Manage Users</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            {activeLink === "/manage-payments" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <Link
              to="/"
              onClick={() => handleLinkClick("/manage-payments")}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <MdPayment className="w-5 h-5" />

              <span className="ml-4">Manage Payment</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            {activeLink === "/manage-payment-organizations" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <Link
              to="/"
              onClick={() => handleLinkClick("/manage-payment-organizations")}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <GoOrganization className="w-5 h-5"  />

              <span className="ml-4">Manage Payment Org.</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
