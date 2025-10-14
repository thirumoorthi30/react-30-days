import React from "react";

const Content = () => {

  const printSomething = () => {
    console.log("testing clicked");
  }
  return (
    <main className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-[60vh]">
      <h1 className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg text-xl font-semibold">
        Content
      </h1>
      <button onClick={printSomething}>Click</button>
      <button onClick={printSomething}>Click</button>
    </main>

  );
};

export default Content;
