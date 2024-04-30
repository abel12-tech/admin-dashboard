import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../../shared/darkModeContext";
import { useAddAdminMutation } from "../api/authApi";
import { useGetAllWarehousesQuery } from "../../manage-warehouse/api/warehouseApi";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const AddAdmin = () => {
  const { isDarkMode, initializeDarkMode } = useDarkMode();
  const [adding, setAdding] = useState(false);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [addAdmin] = useAddAdminMutation();
  const { data: warehouses, isLoading, isSuccess } = useGetAllWarehousesQuery();
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setAdding(true);

      const imageRef = ref(storage, `Blog-images/${image.name + v4()}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addAdmin({
        fullName,
        image: imageUrl,
        userName,
        email,
        phoneNumber,
        password,
        warehouse: selectedWarehouse,
      });
      setAdding(false);
      navigate("/manage-admins");
    } catch (error) {
      console.error("Error adding admin:", error);
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
          <div className="container px-6 mx-auto grid">
            {/* General elements */}
            <h4
              className={`mb-4 text-center p-4 text-lg font-semibold ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Add Admin
            </h4>
            <form onSubmit={handleSubmit}>
              <div
                className={`px-4 py-3 mb-8 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-md`}
              >
                <div className="mb-4">
                  <label className="block text-sm">
                    <span
                      className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Full Name
                    </span>
                    <input
                      type="text"
                      className={`${
                        isDarkMode
                          ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                          : "border-2 outline-none focus:border-gray-200"
                      } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-600 text-sm font-bold mb-2"
                    htmlFor="image"
                  >
                    Image
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    type="file"
                    placeholder="image"
                    onChange={handleImageChange}
                  />
                </div>
                {/* Add other input fields similarly */}
                <div className="mb-4">
                  <label className="block text-sm">
                    <span
                      className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      User Name
                    </span>
                    <input
                      type="text"
                      className={`${
                        isDarkMode
                          ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                          : "border-2 outline-none focus:border-gray-200"
                      } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                      placeholder="User Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="block text-sm">
                    <span
                      className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Email
                    </span>
                    <input
                      type="email"
                      className={`${
                        isDarkMode
                          ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                          : "border-2 outline-none focus:border-gray-200"
                      } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="block text-sm">
                    <span
                      className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      className={`${
                        isDarkMode
                          ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                          : "border-2 outline-none focus:border-gray-200"
                      } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="block text-sm">
                    <span
                      className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Password
                    </span>
                    <input
                      type="password"
                      className={`${
                        isDarkMode
                          ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                          : "border-2 outline-none focus:border-gray-200"
                      } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="block text-sm">
                    <span
                      className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Warehouse
                    </span>
                    <select
                      className={`${
                        isDarkMode
                          ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                          : "border-2 outline-none focus:border-gray-200"
                      } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                      value={selectedWarehouse}
                      onChange={(e) => setSelectedWarehouse(e.target.value)}
                    >
                      {isLoading ? (
                        <option>Loading warehouses...</option>
                      ) : (
                        isSuccess &&
                        warehouses &&
                        warehouses.map((warehouse) => (
                          <option key={warehouse._id} value={warehouse._id}>
                            {warehouse.name}
                          </option>
                        ))
                      )}
                    </select>
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-[#9333EA] hover:bg-[#c190ee] text-white font-semibold py-2 px-4 rounded"
                  disabled={adding}
                >
                  {adding ? "Adding ..." : "Add Admin"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddAdmin;
