// import React from "react";
// import casino from "../assets/casino.png";
// import news from "../assets/news.png";
// import about from "../assets/about.png";
// import bonuses from "../assets/bonuses.png";
// import complaints from "../assets/complaints.png";
// import community from "../assets/community.png";
// import GamePartners from "./GamePartners";
// import DownloadApp from "./DownloadApp";
// import Bonus from "./Bonus";
// import { useNavigate } from "react-router-dom";
// import ComeFAQ from "./ComeFAQ";

// const cardData = [
//   { gameName: "Casinos", image: casino },
//   { gameName: "Bonuses", image: bonuses },
//   { gameName: "Game News", image: news },
//   { gameName: "About", image: about },
//   { gameName: "Complaints", image: complaints },
//   { gameName: "Community", image: community }
// ];

// const Home = () => {
//   const navigate=useNavigate();
//   return (
//     <>
//     <div className="lg:min-h-screen py-20 lg:py-0 bg-gradient-to-b from-black via-[#7f1d1d] to-black text-white flex flex-col items-center justify-center relative overflow-hidden px-6 sm:px-10">

//   <div className="text-center z-10 max-w-4xl">

//     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
//       Come Game App – India's Real-Money Sports & Casino Platform
//     </h1>

//     <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
//       Play Rummy • Casino • Win Big Bonuses
//     </p>

//     <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-8 drop-shadow-lg">
//       ₹650 Welcome Bonus
//     </div>
//     <a
//   href="https://web-in.comegamehub.com/en/affiliate-invited?c=5DAGYXA3&s=1"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="bg-gradient-to-r from-yellow-500 to-red-600 px-6 sm:px-8 py-3 rounded-full text-black font-bold text-base sm:text-lg hover:scale-105 transition duration-300 shadow-2xl inline-block text-center"
// >
//   Download
// </a>

//   </div>

//   {/* Background Glow Effect */}
//   <div className="absolute w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-yellow-500 opacity-20 blur-3xl rounded-full"></div>
// </div>

//       {/* 🔥 CATEGORY SECTION (NEW DIV BELOW HERO) */}
//       <div className="bg-[#111827] py-20">

//         <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6">
//           Get the Truth. Then Play.
//           </h2>
//           <p className="px-4 text-white mb-10 text-center">
// With over 18 years of experience, Pro Safe Bet is your source for reliable and useful information, accurate expert ratings, and genuine player reviews.
// </p>
        

//         <div className="flex justify-between gap-2 overflow-x-scroll px-7 lg:px-10">
//           {cardData.map((item, index) => (
//             <img src={item.image} key={index} className="w-48 h-48 lg:w-60 lg:h-60 rounded-lg"/>
//           ))}
//         </div>
//         <div className="mt-20">
//           <GamePartners/>
//         </div>
//         <div>
//           <DownloadApp/>
//         </div>
//         <div>
//           <Bonus/>
//         </div>
//         <div>
//           <ComeFAQ/>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import casino from "../assets/casino.png";
import news from "../assets/news.png";
import bonusesImg from "../assets/bonuses.png";
import complaints from "../assets/complaints.png";
import community from "../assets/community.png";
import about from "../assets/about.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import GamePartners from "./GamePartners";
import DownloadApp from "./DownloadApp";
import Bonus from "./Bonus";
import ComeFAQ from "./ComeFAQ";
import comeLogo from "../assets/comeLogo.png";

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
            Come Game App – India's Real-Money Sports & Casino Platform
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