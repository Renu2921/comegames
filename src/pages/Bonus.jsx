import React from "react";
import merge from "../assets/merge.webp";

const Bonus = () => {
  return (
    <section className="bg-gradient-to-b from-black via-[#7f1d1d] to-black py-16 md:py-20 px-6 sm:px-10 lg:px-20 text-white">

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#FFD700] mb-6 leading-tight">
            Bonuses & Offers on the Come Games App
          </h2>

          <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
            Discover exciting welcome bonuses, mega jackpots, reward unlocks,
            and exclusive deposit offers inside the Come Games platform.
            Offers may vary over time — always check the official app
            for latest details.
          </p>

          <p className="text-gray-400 text-sm">
            Images are for illustration only. Bonuses and promotions are subject
            to official platform terms and conditions.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition duration-300">

          <img
            src={merge}
            alt="bonus"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
};

export default Bonus;