import React, { useState, useContext } from "react";
import Layout from "../Layout/Layout";
import { themeContext } from "../../App";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { theme } = useContext(themeContext);
  const isDark = theme === "dark";

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
    } catch {
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
      <div
        className={`min-h-[84.50vh] flex items-center justify-center p-4 transition-all
        ${isDark ? "bg-gray-900" : "bg-bgColor"}
      `}
      >
        <div
          className={`shadow-lg rounded-xl p-6 w-full max-w-md transition-all 
          ${isDark ? "bg-gray-800 text-white" : "bg-yellow-100 text-black"}
        `}
        >
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
              className={`flex-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 
              ${isDark ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-500" : "bg-white border-gray-300 focus:ring-blue-400"}
            `}
            />
            <button
              onClick={fetchWeather}
              disabled={loading || !city.trim()}
              className={`px-4 py-2 rounded-lg text-white transition-all duration-200 
              ${loading || !city.trim()
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
              }
            `}
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
              <p className="capitalize text-gray-400">
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

              <p className="text-gray-300">
                Feels like {weather.main.feels_like.toFixed(1)}°C
              </p>

              <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                {[
                  { label: "Humidity", value: `${weather.main.humidity}%` },
                  { label: "Wind Speed", value: `${weather.wind.speed} m/s` },
                  { label: "Pressure", value: `${weather.main.pressure} hPa` },
                  {
                    label: "Visibility",
                    value: `${(weather.visibility / 1000).toFixed(1)} km`,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg
                    ${isDark ? "bg-gray-700" : "bg-red-100"}
                  `}
                  >
                    <p className="text-gray-400">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Weather;
