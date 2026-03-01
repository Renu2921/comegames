import React from "react";
import comeLogo from "../assets/comeLogo.webp";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#0b1220] text-gray-300 border-t border-yellow-500/20">

      {/* Top Disclaimer */}
      <div className="text-center text-xs text-gray-500 py-4 border-b border-yellow-500/10">
        This website is an independent informational and affiliate platform.
        We do not guarantee winnings or operate any games.
      </div>

      <div className="max-w-full mx-auto px-6 sm:px-10 md:px-20 py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Logo + Description */}
          <div>
            <img
              src={comeLogo}
              alt="Come Game Logo"
              className="w-32 mb-6 drop-shadow-lg"
            />

            <p className="text-gray-400 text-sm leading-7">
              Independent information and guides about Come Game and
              real-money gaming apps for Indian users. We do not operate games,
              hold player accounts, or process any payments.
            </p>
          </div>

          {/* Responsible Gaming Box */}
          <div className="bg-[#1a1111] border border-yellow-500/40 rounded-xl p-6 text-sm text-gray-300 shadow-lg">
            <h4 className="text-[#FFD700] font-semibold mb-3">
              18+ Only – Responsible Gaming Notice
            </h4>

            <p>
              Real-money gaming and sports betting involve financial risk
              and may be addictive. Play responsibly and only with money you
              can afford to lose. Availability and legality may vary by
              Indian state.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#FFD700] text-lg font-semibold mb-6 uppercase tracking-wide">
              Get Started
            </h3>

            <a
              href="https://web-in.comegamehub.com/en/affiliate-invited?c=5DAGYXA3&s=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 to-red-600 px-6 py-3 rounded-full text-black font-bold hover:scale-105 transition duration-300 shadow-xl text-center"
            >
              Access the App Now
            </a>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 px-6 sm:px-10 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <div>
          © {new Date().getFullYear()} Come Game Guide. All rights reserved.
        </div>

        <div>
          All trademarks and brand names are the property of their respective owners.
        </div>
      </div>

    </footer>
  );
};

export default Footer;