import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";

export default function DigitalClock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      setDate(now.toDateString());
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[84.50vh] bg-gradient-to-r from-blue-100 to-green-100">
        <div
          className="text-6xl font-bold text-blue-700 bg-white shadow-2xl rounded-3xl px-12 py-8 
                     hover:scale-110 transition-transform duration-500 text-center"
        >
          <p className="text-green-600 text-2xl mb-2 animate-pulse">Digital Clock</p>
          <p>{time}</p>
          <p className="text-gray-500 text-xl mt-2">{date}</p>
        </div>
      </div>
    </Layout>
  );
}
