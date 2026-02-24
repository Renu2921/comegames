import React from "react";

import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png";
import game3 from "../assets/game3.png";
import game4 from "../assets/game4.png";
import game5 from "../assets/game5.png";
import game6 from "../assets/game6.png";

const games = [
  {
    name: "Diwa777",
    image: game1,
    link: "https://diwa777.one/?pid=429559322&pkg=com.diwa777.app",
  },
  {
    name: "8JBet",
    image: game2,
    link: "https://8jjsports.games/?dl=24dm7s",
  },
  {
    name: "Pick11",
    image: game3,
    link: "https://www.pick11.app/invitation-apply?code=44HV68A5",
  },
  {
    name: "IE777",
    image: game4,
    link: "https://ie777.com",
  },
  {
    name: "9IPL",
    image: game5,
    link: "https://9ipl.com",
  },
   {
    name: "Free Spin",
    image: game6,
    link: "https://x9p2a65m.com/?inviteCode=WKTKF6N&from=app",
  },
];

const GamePartners = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#7f1d1d] to-black py-24 px-16">

      <h2 className="text-4xl font-bold text-center text-[#FFD700] mb-16">
        Featured Gaming Partners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">

        {games.map((game, index) => (
          <a
            key={index}
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#111827] rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/10 hover:border-[#FFD700] transition-all duration-300 hover:scale-105"
          >
            <div className="p-6 flex items-center justify-center h-40">
              <img
                src={game.image}
                alt={game.name}
                className="max-h-28 max-w-36 object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="text-center py-4 border-t border-yellow-500/10">
              <p className="text-[#FFD700] font-semibold text-xl">
                {game.name}
              </p>
              <button className="w-[80%] mt-10 bg-gradient-to-r from-yellow-500 to-red-600 px-6 py-2 rounded-full text-black font-bold text-lg hover:scale-110 transition duration-300 shadow-2xl">
            Play
          </button>
            </div>
          </a>
        ))}

      </div>
    </div>
  );
};

export default GamePartners;