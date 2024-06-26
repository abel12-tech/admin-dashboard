import React, { useEffect, useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useGetBlogByIdQuery, useUpdateBlogMutation } from "../api/blogApi";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useDarkMode } from "../../../shared/darkModeContext";

const EditBlog = () => {
  const { isDarkMode ,initializeDarkMode } = useDarkMode();
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [updating , setUpdating] = useState(false)
  const [updatePost] = useUpdateBlogMutation();
  const { data: blog, isLoading, isError } = useGetBlogByIdQuery(id);

  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);

  useEffect(() => {
    if (!isLoading && !isError && blog) {
      setTitle(blog.blog.title);
      setContent(blog.blog.content);
    }
  }, [isLoading, isError, blog]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();
    try {
      setUpdating(true)
      let imageUrl = blog.blog.image;

      if (image !== null) {
        const imageRef = ref(storage, `Blog-images/${image.name + v4()}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await updatePost({
        _id: id,
        title,
        image: imageUrl,
        content,
      }).unwrap();

      setTitle("");
      setImage(null);
      setContent("");
      setUpdating(false)

      navigate("/manage-blogs");
      window.location.reload();
    } catch (error) {
      console.error("Error updating post:", error);
    }
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
              Edit Post
            </h4>
            <form onSubmit={submitFormHandler} className=" p-6  w-full">
              <div
                className={`px-4 py-3 mb-8 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-md`}
              >
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
                  className=" w-30 mt-4 bg-[#9333EA] hover:bg-[#c190ee] text-white font-semibold py-2 px-4 rounded"
                >
                  {updating ? "updating...": "Edit"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditBlog;
