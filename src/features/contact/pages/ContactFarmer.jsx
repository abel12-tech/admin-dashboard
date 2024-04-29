import React, { useEffect, useState } from "react";
import { useDarkMode } from "../../../shared/darkModeContext";
import { useContactFarmerMutation } from "../api/contactApi";
import { useGetAllFarmersQuery } from "../../manage-farmers/api/farmerApi";

const ContactFarmer = () => {
  const { isDarkMode, initializeDarkMode } = useDarkMode();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedFarmer, setSelectedFarmer] = useState("");
  const [send] = useContactFarmerMutation();
  const { data: farmers, isLoading, isSuccess } = useGetAllFarmersQuery();
  console.log(farmers)

  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSending(true);

      await send({
        message,
        farmer: selectedFarmer 
      }).unwrap();

      setMessage("");
      setSelectedFarmer(""); 
      setSending(false);

      window.location.reload();
      console.log("Message sent successfully");
    } catch (error) {
      console.error("Error sending message:", error);
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
              Contact Farmer
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
                    Message
                  </span>
                  <textarea
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                    rows={3}
                    placeholder="Type your message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Select Farmer
                  </span>
                  <select
                    className={`${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-gray-300 focus:shadow-outline-gray"
                        : "border-2 outline-none focus:border-gray-200"
                    } focus:border-gray-400 focus:outline-none focus:shadow-outline-purple sm:col-span-2 text-sm rounded-lg outline-none block w-full p-2.5`}
                    value={selectedFarmer}
                    onChange={(e) => setSelectedFarmer(e.target.value)}
                  >
                    {isLoading ? (
                      <option>Loading Farmers...</option>
                    ) : (
                      isSuccess &&
                      farmers &&
                      farmers.map((farmer) => (
                        <option key={farmer._id} value={farmer._id}>
                          {farmer.fullName}
                        </option>
                      ))
                    )}
                  </select>
                </label>
                <button
                  type="submit"
                  className="mt-4 bg-[#9333EA] hover:bg-[#c190ee] text-white font-semibold py-2 px-4 rounded"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactFarmer;
