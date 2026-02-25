import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#7f1d1d] text-white px-6">

      {/* Slot Machine Style 404 */}
      <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] animate-pulse">
        4🎰4
      </h1>

      <p className="mt-6 text-xl md:text-2xl text-gray-300 text-center">
        Oops! This page hit a jackpot of errors 🎲
      </p>

      <p className="mt-2 text-gray-400 text-center">
        Looks like you rolled the wrong URL.
      </p>

      {/* Casino Button */}
      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-[#FFD700] text-black font-bold rounded-xl shadow-lg 
                   hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
      >
        🎰 Back to Home
      </Link>

      {/* Decorative Chips */}
      <div className="absolute bottom-10 flex gap-4 text-3xl opacity-70">
        ♠️ ♥️ ♣️ ♦️
      </div>
    </div>
  );
};

export default NotFound;