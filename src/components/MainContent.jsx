import React, { useEffect, useRef } from "react";
import "alpinejs";
import { Chart } from "chart.js/auto";
import { useDarkMode } from "../shared/darkModeContext";

const MainContent = () => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const pieConfig = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [33, 33, 33],
            backgroundColor: ["#0694a2", "#1c64f2", "#7e3af2"],
            label: "Dataset 1",
          },
        ],
        labels: ["Shoes", "Shirts", "Bags"],
      },
      options: {
        responsive: true,
        cutoutPercentage: 80,
        legend: {
          display: false,
        },
      },
    };

    const lineConfig = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Organic",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#38b2ac",
            tension: 0.4,
          },
          {
            label: "Paid",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: "#805ad5",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };

    const pieCtx = document.getElementById("pie");
    const lineCtx = document.getElementById("line");

    if (pieCtx && lineCtx) {
      if (pieChartRef.current !== null) {
        pieChartRef.current.destroy();
      }
      pieChartRef.current = new Chart(pieCtx, pieConfig);

      if (lineChartRef.current !== null) {
        lineChartRef.current.destroy();
      }
      lineChartRef.current = new Chart(lineCtx, lineConfig);
    }

    return () => {
      if (pieChartRef.current !== null) {
        pieChartRef.current.destroy();
      }
      if (lineChartRef.current !== null) {
        lineChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <main className={`h-full overflow-y-auto ${isDarkMode ? "dark" : "bg-gray-100"}`}>
      <div className="container px-6 mx-auto grid">
        <h2
          className={`my-6 text-2xl font-semibold ${
            isDarkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Dashboard
        </h2>
        {/* CTA */}

        {/* Cards */}
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Card */}
          <div
            className={`flex items-center p-4 rounded-lg shadow-xs  ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <div>
              <p
                className={`mb-2 text-sm font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Total Farmers
              </p>
              <p
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                60
              </p>
            </div>
          </div>
          {/* Card */}
          <div
            className={`flex items-center p-4 rounded-lg shadow-xs  ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p
                className={`mb-2 text-sm font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Total Products
              </p>
              <p
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                40
              </p>
            </div>
          </div>
          {/* Card */}
          <div
            className={`flex items-center p-4 rounded-lg shadow-xs  ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <div>
              <p
                className={`mb-2 text-sm font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Total Orders
              </p>
              <p
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                10
              </p>
            </div>
          </div>
          {/* Card */}
          <div
            className={`flex items-center p-4 rounded-lg shadow-xs  ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p
                className={`mb-2 text-sm font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                New Orders
              </p>
              <p
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                5
              </p>
            </div>
          </div>
        </div>
        {/* New Table */}

        {/* Charts */}

        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <div
            className={`min-w-0 p-4 rounded-lg shadow-xs ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`mb-4 font-semibold ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Revenue
            </h4>
            <canvas id="pie" />
            <div
              className={`flex justify-center mt-4 space-x-3 text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {/* Chart legend */}
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full" />
                <span>Shirts</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full" />
                <span>Shoes</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full" />
                <span>Bags</span>
              </div>
            </div>
          </div>
          <div
            className={`min-w-0 p-4 rounded-lg shadow-xs ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h4
              className={`mb-4 font-semibold ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Traffic
            </h4>
            <canvas id="line" />
            <div
              className={`flex justify-center mt-4 space-x-3 text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {/* Chart legend */}
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full" />
                <span>Organic</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full" />
                <span>Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
