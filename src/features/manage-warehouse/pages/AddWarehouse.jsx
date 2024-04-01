import React, { useEffect, useState } from "react";
import { useAddWarehouseMutation } from "../api/warehouseApi";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../../shared/darkModeContext";
import MapComponent from "../../../shared/mapComponent";

const AddWarehouse = () => {
  const { isDarkMode, initializeDarkMode } = useDarkMode();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [extraDetail, setExtraDetail] = useState("");
  const [latitude, setLatitude] = useState(null); // New state for latitude
  const [longitude, setLongitude] = useState(null); // New state for longitude
  const [addWarehouse] = useAddWarehouseMutation();
  const navigate = useNavigate();

  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);

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
    <div
      className={`h-full overflow-y-auto ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="flex flex-col flex-1 w-full">
        <main className="h-full pb-16">
          <div className="container mx-auto px-6 grid gap-6">
            <h4
              className={`mb-4 text-center p-4 text-lg font-semibold ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Add Warehouse
            </h4>
            <form
              onSubmit={handleSubmit}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } px-4 py-3 mb-8 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 gap-4`}
            >
              <div className="mb-4">
                <label className="block text-sm">
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Name
                  </span>
                  <input
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple text-sm rounded-lg outline-none block w-full p-2.5`}
                    placeholder="Warehouse Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Address
                  </span>
                  <input
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple text-sm rounded-lg outline-none block w-full p-2.5`}
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Description
                  </span>
                  <textarea
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple text-sm rounded-lg outline-none block w-full p-2.5`}
                    rows={3}
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Country
                  </span>
                  <input
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple text-sm rounded-lg outline-none block w-full p-2.5`}
                    placeholder="Enter country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    City
                  </span>
                  <input
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple text-sm rounded-lg outline-none block w-full p-2.5`}
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Extra Detail
                  </span>
                  <input
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple text-sm rounded-lg outline-none block w-full p-2.5`}
                    placeholder="Enter extra detail"
                    value={extraDetail}
                    onChange={(e) => setExtraDetail(e.target.value)}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label
                  className={`block text-sm mb-4 font-medium ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Select warehouse location on map
                </label>
                <div className=" rounded-lg overflow-hidden border h-96 w-full">
                  <MapComponent
                    setCoordinates={(lat, lng) => {
                      setLatitude(lat);
                      setLongitude(lng);
                    }}
                  />
                </div>
                {latitude && longitude && (
                  <p className="mt-2 text-sm text-gray-500">
                    Latitude: {latitude}, Longitude: {longitude}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="col-span-2 sm:col-auto mt-4 bg-[#9333EA] hover:bg-[#c190ee] text-white font-semibold py-2 px-4 rounded"
              >
                Add Warehouse
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddWarehouse;
