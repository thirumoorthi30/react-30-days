import React, { useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "836580772ffe5825340dd2cd44d12fd0";

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError(data.message || "City not found");
        return;
      }

      setWeather(data);
    } catch (error) {
      setError("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  return (
    <Layout>
      <div className="min-h-[84.50vh] flex items-center justify-center bg-blue-100 p-4">
        <div className="bg-yellow-100 shadow-lg rounded-xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
            Weather App
          </h1>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={fetchWeather}
              disabled={loading || !city.trim()}
              className={`px-4 py-2 rounded-lg text-white transition-all duration-200 ${
                loading || !city.trim()
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "..." : "Search"}
            </button>
          </div>

          {error && (
            <div className="text-red-500 text-center font-medium mb-3">
              {error}
            </div>
          )}

          {weather && (
            <div className="text-center space-y-3">
              <h2 className="text-xl font-semibold">{weather.name}</h2>
              <p className="capitalize text-gray-600">
                {weather.weather[0].description}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="icon"
                className="mx-auto"
              />
              <h1 className="text-5xl font-bold text-blue-600">
                {weather.main.temp.toFixed(1)}°C
              </h1>
              <p className="text-gray-600">
                Feels like {weather.main.feels_like.toFixed(1)}°C
              </p>

              <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                <div className="bg-red-100 p-3 rounded-lg">
                  <p className="text-gray-500">Humidity</p>
                  <p className="font-semibold">{weather.main.humidity}%</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <p className="text-gray-500">Wind Speed</p>
                  <p className="font-semibold">{weather.wind.speed} m/s</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <p className="text-gray-500">Pressure</p>
                  <p className="font-semibold">{weather.main.pressure} hPa</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <p className="text-gray-500">Visibility</p>
                  <p className="font-semibold">
                    {(weather.visibility / 1000).toFixed(1)} km
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Weather;
