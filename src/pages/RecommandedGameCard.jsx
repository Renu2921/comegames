import React from "react";

const RecommandedGameCard = ({data}) => {
    console.log(data);
  return (
    <div className=" flex items-center justify-between bg-[#0f172a]">
      <div className="bg-[#111827] w-40 rounded-2xl overflow-x-scroll scroll shadow-2xl hover:scale-105 transition-transform duration-300">
        <img
          src={data?.image}
          className="w-full object-cover"
        />
       

      </div>
    </div>
  );
};

export default RecommandedGameCard;