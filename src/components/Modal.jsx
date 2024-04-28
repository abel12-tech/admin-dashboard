import React, { useEffect, useRef } from "react";

const Modal = ({
  closeModal,
  remark,
  setRemark,
  amount,
  setAmount,
  screenshot,
  setScreenshot,
  handleSubmit,
}) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div ref={modalRef} className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Pay for Farmer
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="remark"
          >
            Remark
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="remark"
            type="text"
            placeholder="Remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="screenshot"
          >
            Screenshot Path
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="screenshot"
            type="file"
            placeholder="Screenshot Path"
            value={screenshot}
            onChange={(e) => setScreenshot(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="px-3 py-1 focus:shadow-outline-purple text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
            onClick={handleSubmit}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
