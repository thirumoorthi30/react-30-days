import React, { useState } from "react";

const CounterApp1 = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Loading...");

  let message;
  let remainCount = 10 - count;

  const incrementClick = () => setCount((prevCount) => prevCount + 1);
  const decrementClick = () => setCount((prevCount) => prevCount - 1);
  const resetClick = () => setCount(0);

  if(count < 10){
    message = (
      <div>
        <h3>You clicked {count} times</h3>
        <p>remain Count {remainCount}</p>
      </div>
    )
  }

  else if(count === 10){
    message = (
      <div>
        <h3>You clicked {count} times</h3>
        <p>you have unlock the reward! 10% Discount</p>
      </div>
    )
  }
   else if(count < 20){
    message = (
      <div>
        <h3>You clicked {count} times!</h3>
        <p>You are on the way more rewards! keep click and get 20% discount</p>
      </div>
    )
  }
  else{
    message = (
      <div>
        <h3>You clicked {count} times!</h3>
        <p>You are click on top rewards! You are masters</p>
      </div>
    )
  }

  let displayComp = () =>{
    switch(data){
      case "Loading...": return <LoadingComp />;
      
      case "success...": return <SuccessComp />;
      
      case "error...": return <ErrorComp />;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          conditional render
        </h1>

        <p className="text-5xl font-extrabold text-blue-600 mb-8">
          {count}
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={incrementClick}
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
          >
            Click me!
          </button>

          

          { count >= 30 &&
          <button
            onClick={resetClick}
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
          >
            Reset
          </button>
      }

       

          {/* {count >= 10 ? 
          (
          <p className="px-6 py-2">10% Discount</p>
          ):(
          <p className="px-6 py-2">5% Discount</p>
        )
          }

          {count >= 20 && <p>20% Discount</p> } */}

          { message }

           {displayComp() }

        </div>
      </div>
    </div>
  );
};

export default CounterApp1;

function LoadingComp(){
  return (
   <h6>Loading....</h6> 
  )
}

function SuccessComp(){
  return (
   <h6>success....</h6> 
  )
}

function ErrorComp(){
  return (
   <h6>error....</h6> 
  )
}