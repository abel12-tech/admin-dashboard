import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDarkMode } from "../../../shared/darkModeContext";
import {
  useGetProductCategoryByIdQuery,
  useUpdateProductCategoryMutation,
} from "../api/productsApi";

const EditProductCategory = () => {
  const { isDarkMode, initializeDarkMode } = useDarkMode();
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: categoryData, isSuccess } = useGetProductCategoryByIdQuery(id);
  const [updateProductCategory] = useUpdateProductCategoryMutation();

  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);

  useEffect(() => {
    if (isSuccess && categoryData) {
      setCategoryName(categoryData?.productcategory.name);
      setDescription(categoryData?.productcategory.description);
    }
  }, [isSuccess, categoryData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setUpdating(true);
      await updateProductCategory({
        _id: id,
        name: categoryName,
        description,
      }).unwrap();

      setCategoryName("");
      setDescription("");

      setUpdating(false);

      navigate("/manage-product-category");
      window.location.reload();
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  return (
    <div
      className={`h-full overflow-y-auto ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="flex flex-col flex-1 w-full">
        <main className="h-full pb-16 overflow-y-scroll">
          <div className="container px-6 mx-auto grid">
            {/* General elements */}
            <h4
              className={`mb-4 text-center p-4 text-lg font-semibold ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Edit Product Category
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
                    placeholder="category name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
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
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                    rows={3}
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 bg-[#9333EA] hover:bg-[#c190ee] text-white font-semibold py-2 px-4 rounded"
                >
                  {updating ? "updating..." : "Update Category"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditProductCategory;
