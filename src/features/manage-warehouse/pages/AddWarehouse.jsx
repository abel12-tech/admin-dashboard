import React, { useState } from "react";
import { useAddWarehouseMutation } from "../api/warehouseApi";
import { useNavigate } from "react-router-dom";

const AddWarehouse = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [extraDetail, setExtraDetail] = useState("");
  const [addWarehouse] = useAddWarehouseMutation();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const absoluteLocation = { address, description };
    const relativeLocation = { country, city, extraDetail };

    try {
      await addWarehouse({
        name,
        absoluteLocation,
        relativeLocation,
      }).unwrap();
      navigate("/manage-warehouse");
      window.location.reload();
    } catch (error) {
      console.log("Error adding warehouse", error);
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col flex-1 w-full">
        <main className="h-full pb-16">
          <div className="container px-6 mx-auto grid">
            <h4 className="mb-4 text-center p-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
              Add Warehouse
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <label className="block text-sm">
                  <span className="text-gray-700 dark:text-gray-400">Name</span>
                  <input
                    className="dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Warehouse Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Address
                  </span>
                  <input
                    className="dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Description
                  </span>
                  <textarea
                    className="dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                    rows={3}
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Country
                  </span>
                  <input
                    className="dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Enter country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">City</span>
                  <input
                    className="dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Extra Detail
                  </span>
                  <input
                    className="dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Enter extra detail"
                    value={extraDetail}
                    onChange={(e) => setExtraDetail(e.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 bg-[#9333EA] hover:bg-[#c190ee] text-white font-semibold py-2 px-4 rounded"
                >
                  Add Warehouse
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddWarehouse;
