import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAddBlogMutation } from "../api/blogApi";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [addPost] = useAddBlogMutation();

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

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await addPost({
        title,
        image: image.name,
        content,
      }).unwrap();

      setTitle("");
      setImage(null);
      setContent("");

      navigate("/manage-blogs");
      window.location.reload();
    } catch (error) {
      console.error("Error adding post:", error);
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
              Add Post
            </h4>
            <form onSubmit={submitFormHandler}>
              <div className="px-4 py-3 mb-8 grid gap-4 sm:grid-cols-1 sm:gap-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div>
                  <label
                    htmlFor="post-title"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="post-title"
                    id="post-title"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Enter a post title"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="bg-gray-700 border-gray-700 text-white text-sm rounded-lg outline-none block w-full p-2.5"
                    onChange={handleImageChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="content"
                    className="block mb-2 text-sm font-medium text-white"
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
                  className="mt-4 bg-[#9333EA] hover:bg-[#c190ee] w-20 text-white font-semibold py-2 px-4 rounded"
                >
                  Post
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
