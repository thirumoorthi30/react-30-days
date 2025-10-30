import React, { useContext, useState } from "react";
import Layout from "../Layout/Layout";
import { themeContext } from "../../App";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const incrementClick = () => {
    if (count < 10) setCount((prev) => prev + 1);
  };
  const decrementClick = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const resetClick = () => setCount(0);

  const { theme } = useContext(themeContext);
  const isDark = theme === "dark";

  return (
    <Layout>
      <div
        className={`flex flex-col items-center justify-center min-h-[94vh] 
      ${isDark ? "bg-gray-900" : "bg-bgColor"}`}
      >
        <div className=" border border-gray-300 dark:border-gray-700 shadow-lg rounded-2xl p-8 text-center w-80 transition-colors text-blue-600 dark:text-green-400">
          <h1 className="text-3xl font-bold mb-6">Counter App</h1>

          <p
            className={`text-5xl font-extrabold mb-8 ${
              count === 0
                ? "text-gray-400 dark:text-gray-500"
                : count === 10
                ? "text-green-600 dark:text-green-400"
                : "text-blue-600 dark:text-blue-400"
            }`}
          >
            {count}
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={decrementClick}
              disabled={count === 0}
              className={`px-6 py-2 font-semibold rounded-lg shadow-md transition-all
                ${
                  count === 0
                    ? "bg-red-300 dark:bg-red-800 text-white cursor-not-allowed"
                    : "bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 text-white"
                }`}
            >
              -
            </button>

            <button
              onClick={incrementClick}
              className="px-6 py-2 bg-green-500 dark:bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 dark:hover:bg-green-700 transition-all"
            >
              +
            </button>

            <button
              onClick={resetClick}
              className="px-6 py-2 bg-gray-500 dark:bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 dark:hover:bg-gray-700 transition-all"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CounterApp;
