import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import {
  useGetBlogCategoryByIdQuery,
  useUpdateBlogCategoryMutation,
} from "../api/blogApi";
import { useNavigate, useParams } from "react-router-dom";


const EditBlogCategory = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: categoryData, isSuccess } = useGetBlogCategoryByIdQuery(id);
  const [updateBlogCategory] = useUpdateBlogCategoryMutation();

  useEffect(() => {
    if (isSuccess && categoryData) {
      setCategoryName(categoryData?.blogcategory.name);
      setDescription(categoryData?.blogcategory.description);
    }
  }, [isSuccess, categoryData]);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateBlogCategory({
        _id: id,
        name: categoryName,
        description,
      }).unwrap();

      setCategoryName("");
      setDescription("");

      console.log("Category updated successfully");
      navigate("/manage-blog-category");
       window.location.reload(); 
    } catch (error) {
      console.error("Error updating category:", error);
    }
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
              Edit Blog Category
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <label className="block text-sm">
                  <span className="text-gray-700 dark:text-gray-400">Name</span>
                  <input
                    className="dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Product Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Description
                  </span>
                  <textarea
                    className="dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                    rows={3}
                    placeholder="Enter product description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 bg-[#9333EA] hover:bg-[#c190ee] text-white font-semibold py-2 px-4 rounded"
                >
                  Update Category
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditBlogCategory;