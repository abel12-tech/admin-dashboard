import React from "react";

const MobileSidebar = () => {
  return (
    <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden z-30`}>
      <aside className="fixed inset-0 z-30 flex flex-col items-center justify-center w-full h-full pb-24">
        <div className="absolute inset-0 z-20 w-full h-full bg-gray-600 opacity-75"></div>
        <div className="relative z-30 w-full max-w-md bg-white shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 bg-purple-600">
            <a className="text-lg font-semibold text-white" href="#">
              Windmill
            </a>
            <button
              className="text-white focus:outline-none"
              aria-label="Close sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col mt-10">
            <a
              className="px-4 py-2 text-lg font-medium text-gray-800 border-l-4 border-purple-600"
              href="index.html"
            >
              Dashboard
            </a>
            <a
              className="px-4 py-2 mt-2 text-lg font-medium text-gray-800 hover:bg-purple-100"
              href="forms.html"
            >
              Forms
            </a>
            <a
              className="px-4 py-2 mt-2 text-lg font-medium text-gray-800 hover:bg-purple-100"
              href="cards.html"
            >
              Cards
            </a>
          </nav>
          <div className="mt-auto">
            <button className="block w-full px-4 py-2 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700">
              Create account
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MobileSidebar;
