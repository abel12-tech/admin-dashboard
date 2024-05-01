import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDarkMode } from "../../../shared/darkModeContext";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import {
  useGetPaymentOrgByIdQuery,
  useUpdatePaymentOrgMutation,
} from "../api/paymentApi";

const EditPaymentOrg = () => {
  const { isDarkMode, initializeDarkMode } = useDarkMode();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [editing, setEditing] = useState(false);
  const [editOrg] = useUpdatePaymentOrgMutation();
  const navigate = useNavigate();
  const { data: orgData, isLoading } = useGetPaymentOrgByIdQuery(id);

  useEffect(() => {
    initializeDarkMode();
    if (!isLoading && orgData) {
      setName(orgData.paymentOrg.name);
    }
  }, [initializeDarkMode, isLoading, orgData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setEditing(true);
      let imageUrl = orgData?.paymentOrg.logo;
      if (image) {
        const imageRef = ref(storage, `Blog-images/${image.name + v4()}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await editOrg({
        _id: id,
        name: name,
        logo: imageUrl,
      });

      setEditing(false);
      navigate("/manage-payment-organizations");
      window.location.reload();
    } catch (error) {
      console.error("Error editing org:", error);
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
            <h4
              className={`mb-4 text-center p-4 text-lg font-semibold ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Edit Payment Organization
            </h4>
            <form onSubmit={handleSubmit}>
              <div
                className={`px-4 py-3 mb-8 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-md`}
              >
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
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                    placeholder="Name"
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
                    Image
                  </span>
                  <input
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 bg-[#9333EA] hover:bg-[#c190ee] text-white font-semibold py-2 px-4 rounded"
                >
                  {editing ? "Editing..." : "Edit Org."}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditPaymentOrg;
