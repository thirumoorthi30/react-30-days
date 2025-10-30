import React from "react";
import CounterApp from "../CounterApp/CounterApp copy";
import Shop from "./Shop";
import { useParams } from "react-router-dom";

const Content = () => {

  let {name} = useParams();
  



  let user = "testing";

  const printSomething = (e) => {
    console.log(e.target.innerText);
    console.log("testing clicked");
    user = "Thiru";
    console.log(user);
  }

  const printSomethingOne = (event) => {
    console.log(event.target.innerText);
    console.log("Hello world");
    user = "Thirumoorthi";
    console.log(user);
  }



  return (
    <main className="flex flex-col items-center justify-center p-8 bg-bgColor min-h-[60vh]">
      <h1 className="bg-bgColor text-white px-4 py-2 rounded-lg shadow-lg text-xl font-semibold">
        Content - {user} - {name}
      </h1>
      <button onClick={printSomething}>Click</button>
      <button onClick={ (e) => {printSomethingOne(e)}}>Click me 1</button>
      <CounterApp copy />
      <Shop />
    </main>

  );
};

export default Content;
