import React, { useState } from "react";
import Layout from "../Layout/Layout";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const incrementClick = () => {
    if (count < 10) setCount((prev) => prev + 1);
  };
  const decrementClick = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const resetClick = () => setCount(0);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[75vh] bg-gradient-to-r from-green-100 to-blue-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Counter App</h1>

          <p
            className={`text-5xl font-extrabold mb-8 ${
              count === 0
                ? "text-gray-400"
                : count === 10
                ? "text-green-700"
                : "text-blue-600"
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
                    ? "bg-red-300 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600 text-white"
                }`}
            >
              -
            </button>
            <button
              onClick={incrementClick}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
            >
              +
            </button>
            <button
              onClick={resetClick}
              className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all"
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
