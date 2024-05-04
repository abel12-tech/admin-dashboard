import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDarkMode } from "../../../shared/darkModeContext";
import {
  useGetAdminByIdQuery,
  useUpdateAdminProfileMutation,
} from "../api/authApi";

const UpdateProfile = () => {
  const { isDarkMode } = useDarkMode();
  const { id } = useParams();
  const { data: adminData } = useGetAdminByIdQuery(id);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [updateAdminProfile, { isLoading }] = useUpdateAdminProfileMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (adminData) {
      setFullName(adminData?.admin.fullName);
      setPhoneNumber(adminData?.admin.phoneNumber);
    }
  }, [adminData]);

  const handleUpdate = async () => {
    try {
      await updateAdminProfile({ _id: id, fullName, phoneNumber });
      navigate("/profile");
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div
      className={`h-full overflow-y-auto ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="flex mt-16 flex-col flex-1 w-full">
        <main className="h-full pb-16">
          <div className="container px-6 mx-auto grid">
            <div
              className={`px-4 py-3 mb-8 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } rounded-lg shadow-md`}
            >
              <div>
                <label
                  htmlFor="fullName"
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`${
                    isDarkMode
                      ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                      : "border-2 outline-none focus:border-gray-200"
                  } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`${
                    isDarkMode
                      ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                      : "border-2 outline-none focus:border-gray-200"
                  } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                  placeholder="Enter your phone number"
                />
              </div>
              <button
                onClick={handleUpdate}
                disabled={isLoading}
                className={`mt-4 bg-[#9333EA] hover:bg-[#c190ee] w-50 text-white font-semibold py-2 px-4 rounded ${
                  isLoading && "opacity-50 cursor-not-allowed"
                }`}
              >
                {isLoading ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UpdateProfile;
