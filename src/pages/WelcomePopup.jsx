import React from "react";
import comeLogo from "../assets/comeLogo.png";
import girlImage from "../assets/girl.png";

const WelcomePopup = ({ closePopup }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">

      <div className="relative bg-gradient-to-b from-[#111827] via-[#7f1d1d] to-black rounded-3xl max-w-3xl w-full shadow-2xl border border-yellow-500/30 overflow-hidden animate-scaleIn">

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400"
        >
          ✕
        </button>

        <div className="flex flex-row items-center p-6 md:p-10 gap-8">

          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <img src={comeLogo} alt="logo" className="w-20 lg:w-40 mb-6" />

            <h2 className=" text-xl lg:text-3xl font-bold text-yellow-400 mb-4">
              ₹650 Invite Bonus
            </h2>

            <a
              href="https://web-in.comegamehub.com/en/affiliate-invited?c=5DAGYXA3&s=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 to-red-600 px-8 py-3 rounded-full text-black font-bold hover:scale-105 transition duration-300 shadow-xl"
            >
              Download Now
            </a>
          </div>

          <div>
            <img
              src={girlImage}
              alt="girl"
              className="w-40 rounded-lg md:w-80 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;