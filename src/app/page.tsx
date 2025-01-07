"use client";

import React, { useState, useEffect } from "react";

const calculateTimeLeft = () => {
  const launchDate = new Date("2025-01-14T12:00:00"); // Set your launch date
  const now = new Date();
  const difference = launchDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { expired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function LaunchingSoonPage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white text-center px-4">
      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 font-instrument">
        🚀 Sites for UX is Launching Soon!
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-300 font-instrument">
        Discover handpicked UX design resources, inspiration, and tools crafted for designers.
      </p>

      {/* Timer */}
      {!timeLeft.expired ? (
        <div className="flex gap-4 md:gap-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold bg-white text-[#1E293B] px-4 py-2 rounded-lg min-w-[70px]">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <span className="text-sm md:text-base mt-2">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold bg-white text-[#1E293B] px-4 py-2 rounded-lg min-w-[70px]">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <span className="text-sm md:text-base mt-2">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold bg-white text-[#1E293B] px-4 py-2 rounded-lg min-w-[70px]">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <span className="text-sm md:text-base mt-2">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold bg-white text-[#1E293B] px-4 py-2 rounded-lg min-w-[70px]">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <span className="text-sm md:text-base mt-2">Seconds</span>
          </div>
        </div>
      ) : (
        <p className="text-2xl font-bold text-green-400">🎉 We're Live! Explore Now!</p>
      )}

      {/* Footer */}
      <p className="text-sm text-gray-400">
        Stay tuned for the big reveal. We're crafting something amazing! ✨
      </p>
    </div>
  );
}
