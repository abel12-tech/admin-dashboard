import React, { useEffect, useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAddBlogMutation, useGetAllBlogsQuery } from "../api/blogApi";
import { useNavigate } from "react-router-dom";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useDarkMode } from "../../../shared/darkModeContext";
import { useGetAllBlogCategoriesQuery } from "../api/blogApi";

const AddBlog = () => {
  const { isDarkMode, initializeDarkMode } = useDarkMode();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [posting, setPosting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const {
    data: categories,
    isLoading,
    isSuccess,
  } = useGetAllBlogCategoriesQuery();
  const navigate = useNavigate();
  const [addPost] = useAddBlogMutation();

  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory(categories[0]._id);
    }
  }, [categories]);


  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  let toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    try {
      setPosting(true);
      if (image === null) return;

      const imageRef = ref(storage, `Blog-images/${image.name + v4()}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      await addPost({
        title,
        image: imageUrl,
        content,
        category:selectedCategory
      }).unwrap();

      setTitle("");
      setImage(null);
      setContent("");
      setPosting(false);

      navigate("/manage-blogs");
      window.location.reload();
    } catch (error) {
      console.error("Error adding post:", error);
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
              Add Post
            </h4>
            <form onSubmit={submitFormHandler}>
              <div
                className={`px-4 py-3 mb-8 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-md`}
              >
                <div>
                  <label className="block mt-4 text-sm">
                    <span
                      className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      Select Category
                    </span>
                    <select
                      className={`${
                        isDarkMode
                          ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                          : "border-2 outline-none focus:border-gray-200"
                      } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {isLoading ? (
                        <option>Loading category...</option>
                      ) : (
                        isSuccess &&
                        categories &&
                        categories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))
                      )}
                    </select>
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="post-title"
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="post-title"
                    id="post-title"
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                    placeholder="Enter a post title"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>

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
                    htmlFor="content"
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Content
                  </label>
                  <QuillEditor
                    modules={module}
                    className="bg-gray-300 text-black sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5"
                    theme="snow"
                    value={content}
                    onChange={handleContentChange}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-[#9333EA] hover:bg-[#c190ee] w-50 text-white font-semibold py-2 px-4 rounded"
                >
                  {posting ? "posting..." : "Post"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddBlog;
