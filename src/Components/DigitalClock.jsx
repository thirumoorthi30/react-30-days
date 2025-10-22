import React, { useState, useEffect } from "react";
import Layout from "./Layout";

export default function DigitalClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
    <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-r from-blue-100 to-green-100">
      <div
        className="text-6xl font-bold text-blue-700 bg-white shadow-xl rounded-2xl px-10 py-6 
                   animate-pulse transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <p className="text-green-600">Digital Clock</p>
        {time}
      </div>
    </div>
    </Layout>
  );
}
