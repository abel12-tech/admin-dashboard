import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDarkMode } from "../../../shared/darkModeContext";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import {
  useGetAdminByIdQuery,
  useUpdateAdminProfileMutation,
} from "../api/authApi";

const UpdateProfile = () => {
  const { isDarkMode } = useDarkMode();
  const { id } = useParams();
  const { data: adminData } = useGetAdminByIdQuery(id);
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [userName, setuserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [updating, setUpdating] = useState(false);

  const [updateAdminProfile, { isLoading }] = useUpdateAdminProfileMutation();
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    if (adminData) {
      setFullName(adminData?.admin.fullName);
      setuserName(adminData?.admin.userName);
      setPhoneNumber(adminData?.admin.phoneNumber);
    }
  }, [adminData]);

  const handleUpdate = async () => {
    try {
      setUpdating(true);
      let imageUrl = adminData?.admin.image;

      if (image !== null) {
        const imageRef = ref(storage, `Blog-images/${image.name + v4()}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await updateAdminProfile({
        _id: id,
        fullName,
        userName,
        phoneNumber,
        image: imageUrl,
      });
      setUpdating(false);
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
                  htmlFor="image"
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className={`${
                    isDarkMode
                      ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                      : "border-2 outline-none focus:border-gray-200"
                  } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                  onChange={handleImageChange}
                />
              </div>
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
                  htmlFor="userName"
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setuserName(e.target.value)}
                  className={`${
                    isDarkMode
                      ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                      : "border-2 outline-none focus:border-gray-200"
                  } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                  placeholder="Enter your user name"
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
                className={`mt-4 bg-[#9333EA] hover:bg-[#c190ee] w-50 text-white font-semibold py-2 px-4 rounded ${
                  isLoading && "opacity-50 cursor-not-allowed"
                }`}
              >
                {updating ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UpdateProfile;
