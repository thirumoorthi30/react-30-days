import React, { useState } from "react";
import Layout from "./Layout";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const incrementClick = () => setCount((prevCount) => prevCount + 1);
  const decrementClick = () => setCount((prevCount) => prevCount - 1);
  const resetClick = () => setCount(0);

  return (
    <Layout>
    <div className="flex flex-col items-center justify-center min-h-[75vh] bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Counter App
        </h1>

        <p className="text-5xl font-extrabold text-blue-600 mb-8">
          {count}
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={decrementClick}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all"
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
