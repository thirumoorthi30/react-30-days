import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";

function JokeApp() {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState("");

  const fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke", {method: "GET"})
    .then( (response) => {
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error("Something went wrong...");
        }
    })
    .then((data) => {
        setJoke(data);
        console.log(data);
    })
    .catch( (error) => {
        setError(error.message);
    })
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Layout>
    <div className="flex flex-col items-center justify-center min-h-[75vh] bg-gradient-to-br from-yellow-100 to-orange-200 text-center p-6">
      <h1 className="text-3xl font-bold text-orange-700 mb-6"> Joke App</h1>
      <div className="bg-white shadow-lg rounded-xl p-6 w-full sm:w-96">
        <p className="text-lg text-gray-800 mb-6">{joke.setup} - {joke.punchline}</p>
        <button
          onClick={fetchJoke}
          className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
        >
          Get Another Joke
        </button>
      </div>
      {
        error && <p>{error}</p>
    }
    </div>
    </Layout>
  );
}

export default JokeApp;
