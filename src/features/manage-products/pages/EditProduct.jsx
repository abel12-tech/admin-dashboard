import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useDarkMode } from "../../../shared/darkModeContext";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../api/productsApi";

const EditProduct = () => {
  const { isDarkMode } = useDarkMode();
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [farmer, setFarmer] = useState("");
  const [description, setDescription] = useState("");
  const [updating, setUpdating] = useState(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const { data: productData, isLoading, isError } = useGetProductByIdQuery(id);
  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    if (!isLoading && !isError && productData) {
      setProductName(productData.product.name);
      setQuantity(productData.product.quantity);
      setPrice(productData.product.unitPrice);
      setFarmer(productData.product.farmer);
      setDescription(productData.product.description);
    }
  }, [isLoading, isError, productData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setUpdating(true);
      let imageUrl = productData.product.image;

      if (image !== null) {
        const imageRef = ref(storage, `Blog-images/${image.name + v4()}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }
      await updateProduct({
        _id: id,
        image: imageUrl,
        name: productName,
        quantity,
        unitPrice: price,
        description,
      });
      setUpdating(false);
      navigate("/manage-products");
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
              Edit Product
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
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </label>
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
                <label className="block mt-4 text-sm">
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Quantity
                  </span>
                  <input
                    type="number"
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Price
                  </span>
                  <input
                    type="number"
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Farmer
                  </span>
                  <input
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                    placeholder="Farmer"
                    value={farmer}
                    onChange={(e) => setFarmer(e.target.value)}
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
                    placeholder="Enter product description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 bg-[#9333EA] hover:bg-[#c190ee] text-white font-semibold py-2 px-4 rounded"
                >
                  {updating ? "updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditProduct;
