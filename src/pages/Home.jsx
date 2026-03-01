import React from "react";
import casino from "../assets/casino.webp";
import news from "../assets/news.webp";
import bonusesImg from "../assets/bonuses.webp";
import complaints from "../assets/complaints.webp";
import community from "../assets/community.webp";
import about from "../assets/about.webp";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import GamePartners from "./GamePartners";
import DownloadApp from "./DownloadApp";
import Bonus from "./Bonus";
import ComeFAQ from "./ComeFAQ";
import comeLogo from "../assets/comeLogo.webp";

const cardData = [
  { title: "Casinos", image: casino },
  { title: "Bonuses", image: bonusesImg },
  { title: "Game News", image: news },
  { title: "Complaints", image: complaints },
  { title: "Community", image: community },
  { title: "About", image: about },
];

const Home = () => {
  const location = useLocation();

  useEffect(() => {
  if (location.state?.scrollTo) {
    const id = location.state.scrollTo;

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  }
}, [location]);
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="lg:min-h-screen py-20 px-6 sm:px-10 bg-gradient-to-b from-black via-[#7f1d1d] to-black text-white flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div className="text-center max-w-4xl z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
            Come Game Vs Dream11 - Best Trusted Real Money APK 2026
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
            Play Rummy • Casino • Win Big Bonuses
          </p>

          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-8 drop-shadow-lg">
            ₹650 Welcome Bonus
          </div>
          <div className="flex justify-center items-center">
  <a
    href="https://web-in.comegamehub.com/en/affiliate-invited?c=5DAGYXA3&s=1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={comeLogo}
      className="w-60 h-60 cursor-pointer hover:scale-105 transition duration-300"
      alt="Come Logo"
    />
  </a>
</div>
          <a
            href="https://web-in.comegamehub.com/en/affiliate-invited?c=5DAGYXA3&s=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-500 to-red-600 px-6 sm:px-8 py-3 rounded-full text-black font-bold text-base sm:text-lg hover:scale-105 transition duration-300 shadow-2xl inline-block"
          >
            Download Now
          </a>
        </div>

        {/* Glow Background */}
        <div className="absolute w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-yellow-500 opacity-20 blur-3xl rounded-full"></div>
      </section>

      {/* ================= GAMES SECTION ================= */}
      <section
        
        className="bg-[#111827] py-20 px-6 sm:px-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-6">
          Explore Categories
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Discover multiple gaming options including Casino, Rummy,
          Sports Betting and exciting rewards — all in one platform.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300 border border-yellow-500/10 hover:border-yellow-500/40 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-yellow-400 font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section id="games" className="bg-[#0f172a] py-20">
        <GamePartners />
      </section>

      {/* ================= DOWNLOAD ================= */}
      <section>
        <DownloadApp />
      </section>

      {/* ================= BONUS ================= */}
      <section id="bonus">
        <Bonus />
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="bg-[#111827] py-20 px-6 sm:px-10">
        <ComeFAQ />
      </section>
    </>
  );
};

export default Home;