import React from "react";
import Cross from "../assets/CombinedShapeCopy.png";

const WinnersModalComp = () => {
  return (
    <div className="fixed w-full">
      <div className="bg-gray-800 text-center shadow-xl ">
        <p className="text-sm text-gray-400 font-semibold py-6">YOU WON!</p>

        <div className="flex items-center justify-center text-4xl font-bold gap-2">
          <img src={Cross} alt="Cross" />
          <span className="text-cyan-300 text-2xl uppercase">
            takes the round
          </span>
        </div>

        <div className="flex gap-4 justify-center py-6">
          <button className="bg-gray-400 text-black text-[12px] font-bold px-4 py-2 rounded-[10px] hover:bg-gray-300 uppercase">
            Quit
          </button>
          <button className="bg-yellow-400 text-black text-[12px] font-bold px-4 py-2 rounded-[10px] hover:bg-yellow-300 uppercase">
            Next Round
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinnersModalComp;
