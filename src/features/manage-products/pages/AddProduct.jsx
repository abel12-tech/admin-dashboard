import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";

const AddProduct = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [farmer, setFarmer] = useState("");
  const [description, setDescription] = useState("");

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isSideMenuOpen={isSideMenuOpen} />
      <div className="flex flex-col flex-1 w-full">
        <Header toggleSideMenu={toggleSideMenu} />

        <main className="h-full pb-16 overflow-y-scroll">
          <div className="container px-6 mx-auto grid">
            {/* General elements */}
            <h4 className="mb-4 text-center p-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
              Add Product
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <label className="block text-sm">
                  <span className="text-gray-700 dark:text-gray-400">Name</span>
                  <input
                    className="block h-10 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Quantity
                  </span>
                  <input
                    type="number"
                    className="block h-10 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Price
                  </span>
                  <input
                    type="number"
                    className="block h-10 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Farmer
                  </span>
                  <input
                    className="block h-10 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
                    placeholder="Farmer"
                    value={farmer}
                    onChange={(e) => setFarmer(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Description
                  </span>
                  <textarea
                    className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                    rows={3}
                    placeholder="Enter product description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddProduct;
