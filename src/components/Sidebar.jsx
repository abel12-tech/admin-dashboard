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
import { GiFarmer } from "react-icons/gi";
import { IoIosChatboxes } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { selectIsSuper } from "../features/authentication/slice/authSlice";
import { useSelector } from "react-redux";

const Sidebar = ({ isSideMenuOpen }) => {
  const [activeLink, setActiveLink] = useState("/");
  const [isUsersDropdownOpen, setIsUsersDropdownOpen] = useState(false);
  const [isPaymentDropDownOpen, setIsPaymentDropdownOpen] = useState(false);
  const [isContactDropDownOpen, setIsContactDropdownOpen] = useState(false);
  const { isDarkMode } = useDarkMode();
  const isSuper = useSelector(selectIsSuper);

  const handleUserDropdownToggle = () => {
    setIsUsersDropdownOpen(!isUsersDropdownOpen);
  };
  const handleContactDropdownToggle = () => {
    setIsContactDropdownOpen(!isContactDropDownOpen);
  };

  const handlePaymentDropdownToggle = () => {
    setIsPaymentDropdownOpen(!isPaymentDropDownOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <aside
      className={`${
        isSideMenuOpen ? "block" : "hidden"
      } z-20 w-64 overflow-y-auto ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } md:block flex-shrink-0`}
    >
      <div
        className={`py-4 h-screen ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
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
            <button
              onClick={handleContactDropdownToggle}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 focus:outline-none ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <IoIosChatboxes className="w-5 h-5 font-bold " />
              <span className="ml-4">Contact</span>
              {isContactDropDownOpen ? (
                <RiArrowDropDownLine className=" ml-10 w-5 h-5" />
              ) : (
                <RiArrowDropDownLine className=" ml-10 w-5 h-5" />
              )}
            </button>
            {isContactDropDownOpen && (
              <ul>
                <li className="relative px-6 py-3">
                  <Link
                    to="/contact-farmer"
                    onClick={() => handleLinkClick("/contact-farmer")}
                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                      isDarkMode
                        ? "dark:hover:text-gray-200"
                        : "text-gray-800 dark:hover:text-gray-600"
                    }`}
                  >
                    <GiFarmer className="w-5 h-5" />
                    <span className="ml-4">Contact Farmer</span>
                  </Link>
                </li>
                {isSuper && (
                  <li className="relative px-6 py-3">
                    <Link
                      to="/contact-admin"
                      onClick={() => handleLinkClick("/contact-admin")}
                      className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                        isDarkMode
                          ? "dark:hover:text-gray-200"
                          : "text-gray-800 dark:hover:text-gray-600"
                      }`}
                    >
                      <MdOutlineAdminPanelSettings className="w-5 h-5" />
                      <span className="ml-4">Contact Admin</span>
                    </Link>
                  </li>
                )}
              </ul>
            )}
          </li>
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
          {isSuper ? (
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
          ) : (
            <li className="relative px-6 py-3">
              {activeLink === "/manage-order-in-my-warehouse" && (
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )}
              <Link
                to="/manage-order-in-my-warehouse"
                onClick={() => handleLinkClick("/manage-order-in-my-warehouse")}
                className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                  isDarkMode
                    ? "dark:hover:text-gray-200"
                    : "text-gray-800 dark:hover:text-gray-600"
                }`}
              >
                <BsBorderStyle className="w-5 h-5" />
                <span className="ml-4">Manage Order In My Warehouse</span>
              </Link>
            </li>
          )}
          <li className="relative px-6 py-3">
            <button
              onClick={handleUserDropdownToggle}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 focus:outline-none ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <FiUsers className="w-5 h-5 font-bold " />
              <span className="ml-4">Manage Users</span>
              {isUsersDropdownOpen ? (
                <RiArrowDropDownLine className=" ml-10 w-5 h-5" />
              ) : (
                <RiArrowDropDownLine className=" ml-10 w-5 h-5" />
              )}
            </button>
            {isUsersDropdownOpen && (
              <ul>
                <li className="relative px-6 py-3">
                  <Link
                    to="/manage-farmers"
                    onClick={() => handleLinkClick("/manage-farmers")}
                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                      isDarkMode
                        ? "dark:hover:text-gray-200"
                        : "text-gray-800 dark:hover:text-gray-600"
                    }`}
                  >
                    <GiFarmer className="w-5 h-5" />
                    <span className="ml-4">Manage Farmers</span>
                  </Link>
                </li>
                {isSuper && (
                  <li className="relative px-6 py-3">
                    <Link
                      to="/manage-admins"
                      onClick={() => handleLinkClick("/manage-admins")}
                      className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                        isDarkMode
                          ? "dark:hover:text-gray-200"
                          : "text-gray-800 dark:hover:text-gray-600"
                      }`}
                    >
                      <MdOutlineAdminPanelSettings className="w-5 h-5" />
                      <span className="ml-4">Manage Admins</span>
                    </Link>
                  </li>
                )}
              </ul>
            )}
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
          {isSuper ? (
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
          ) : (
            ""
          )}

          <li className="relative px-6 py-3">
            <button
              onClick={handlePaymentDropdownToggle}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 focus:outline-none ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <MdPayment className="w-5 h-5 font-bold " />
              <span className="ml-4">Manage Pay.</span>
              {isPaymentDropDownOpen ? (
                <RiArrowDropDownLine className=" ml-10 w-5 h-5" />
              ) : (
                <RiArrowDropDownLine className=" ml-10 w-5 h-5" />
              )}
            </button>
            {isPaymentDropDownOpen && (
              <ul>
                <li className="relative px-6 py-3">
                  <Link
                    to="/manage-payments"
                    onClick={() => handleLinkClick("/manage-payments")}
                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                      isDarkMode
                        ? "dark:hover:text-gray-200"
                        : "text-gray-800 dark:hover:text-gray-600"
                    }`}
                  >
                    <MdPayment className="w-5 h-5" />
                    <span className="ml-4">Payments</span>
                  </Link>
                </li>
                <li className="relative px-6 py-3">
                  <Link
                    to="/payment-for-farmer"
                    onClick={() => handleLinkClick("/payment-for-farmer")}
                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                      isDarkMode
                        ? "dark:hover:text-gray-200"
                        : "text-gray-800 dark:hover:text-gray-600"
                    }`}
                  >
                    <GiFarmer className="w-5 h-5" />
                    <span className="ml-4">Payment for farmer</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="relative px-6 py-3">
            {activeLink === "/manage-payment-organizations" && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            )}
            <Link
              to="/manage-payment-organizations"
              onClick={() => handleLinkClick("/manage-payment-organizations")}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 ${
                isDarkMode
                  ? "dark:hover:text-gray-200"
                  : "text-gray-800 dark:hover:text-gray-600"
              }`}
            >
              <GoOrganization className="w-5 h-5" />
              <span className="ml-4">Manage Payment Org.</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
