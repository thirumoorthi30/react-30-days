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
      <div className="flex items-center justify-center min-h-[84.50vh] bg-[var(--bg)] text-[var(--text)]">
        <div
          className="
            shadow-2xl rounded-3xl px-12 py-8 text-center 
            bg-[var(--bg)] border border-gray-300 dark:border-gray-700
            transition-transform duration-500 hover:scale-110
          "
        >
          <p className="text-2xl mb-2 font-semibold animate-pulse text-blue-600 dark:text-blue-400">
            Digital Clock
          </p>

          <p className="text-6xl font-bold text-green-600 dark:text-green-400">
            {time}
          </p>

          <p className="text-xl mt-2 text-gray-600 dark:text-gray-400">
            {date}
          </p>
        </div>
      </div>
    </Layout>
  );
}
