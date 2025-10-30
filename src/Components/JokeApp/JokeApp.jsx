import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";

function JokeApp() {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState("");

  const fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Something went wrong...");
      })
      .then((data) => setJoke(data))
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[84.5vh] bg-[var(--bg)] text-[var(--text)] text-center p-6 transition-all">
        
        <h1 className="text-3xl font-bold mb-6 text-orange-600 dark:text-orange-400">
          Joke App
        </h1>

        <div className="bg-[var(--bg)] border border-gray-300 dark:border-gray-700 shadow-lg rounded-xl p-6 w-full sm:w-96 transition-all">
          <p className="text-lg mb-6 text-gray-800 dark:text-gray-200">
            {joke.setup} — {joke.punchline}
          </p>

          <button
            onClick={fetchJoke}
            className="
              px-6 py-2 rounded-lg font-medium transition-colors 
              bg-orange-600 text-white hover:bg-orange-700
              dark:bg-orange-500 dark:hover:bg-orange-600
            "
          >
            Get Another Joke
          </button>
        </div>

        {error && <p className="mt-4 text-red-600 dark:text-red-400">{error}</p>}
      </div>
    </Layout>
  );
}

export default JokeApp;
