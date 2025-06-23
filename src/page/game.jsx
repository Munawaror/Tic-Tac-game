import React, { useEffect, useState } from "react";
import CrossIcon from "../assets/CombinedShapeCopy.png";
import CircleIcon from "../assets/Oval Copy.png";
import CrossIcongrey from "../assets/Combined Shape Copy 2.png";
import { GrPowerReset } from "react-icons/gr";
import WinnersModalComp from "../component/WinnersModalComp";
const Game = ({
  playerOneMark,
  setPlayerOneMark,
  playerTwoMark,
  setPlayerTwoMark,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [gameButtons, setGameButtons] = useState(
    Array.from(Array(9).fill(" "))
  );
  const [playerTurn, setPlayerTurn] = useState("X");
  const [playerXScore, setPlayerXScore] = useState(0);
  const [playerOScore, setPlayerOScore] = useState(0);
  const [ties, setTies] = useState(0);

  const checkPlayerThatWins = (buttons) => {
    const arrayOfWinnings = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < arrayOfWinnings.length; i++) {
      // distructure the value of the array of winnings
      const [x, y, z] = arrayOfWinnings[i];
      // check movement on the board, then check if that same move is the same with that of the destructed move
      if (
        gameButtons[x] &&
        gameButtons[x] == gameButtons[y] &&
        gameButtons[x] == gameButtons[z]
      ) {
        return gameButtons[x];
      }
    }
    return null;
  };
  const winner = checkPlayerThatWins(gameButtons);

  useEffect(() => {
    if (winner == "X") {
      setPlayerXScore(playerXScore + 1);
      setShowModal(true);
    } else if (winner == "O") {
      setPlayerOScore(playerOScore + 1);
      setShowModal(true);
    }
  }, [winner]);

  const handleButtonClick = (i) => {
    playerTurn == "O" ? (gameButtons[i] = "O") : (gameButtons[i] = "X");
    setGameButtons(gameButtons);
    playerTurn == playerOneMark
      ? setPlayerTurn(playerTwoMark)
      : setPlayerTurn(playerOneMark);
  };


  return (
    <main
      className="w-full max-w-[375px] h-auto mx-auto flex flex-col items-center
    justify-center "
    >
      <div className="w-full flex items-center justify-between gap-1 px-12">
        <div className="flex">
          {" "}
          <img src={CrossIcon} alt="Cross Icon" className="w-6 h-6" />
          <img src={CircleIcon} alt="Circle Icon" className="w-6 h-6" />
        </div>
        <button className="border-none bg-[#1f3641] flex items-center gap-2 cursor-pointer  shadow-[0_5px_0_rgba(0,0,0,0.25)] rounded-[10px] w-30 h-10 px-3.5">
          {playerTurn == "X" && (
            <img src={CrossIcongrey} alt="CrossIcongrey" className="w-4 h-4" />
          )}
          {playerTurn == "O" && (
            <img src={CircleIcon} alt="Circle Icon" className="w-4 h-4" />
          )}

          <h2 className="text-[#a8bfc9] text-[1rem] font-bold ">TURN</h2>
        </button>
        <button className="border-none bg-[#a8bfc9] w-8 h-8 px-2 rounded-[6px] shadow-[0_5px_0_#4B5563]">
          <GrPowerReset />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 p-6 ">
        {gameButtons.map((button, i) => (
          <button
            type="button"
            onClick={() => handleButtonClick(i)}
            className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)] flex items-center justify-center"
          >
            {gameButtons[i] == "O" && (
              <img src={CircleIcon} alt="CrossIcongrey" className="w-4 h-4" />
            )}
            {gameButtons[i] == "X" && (
              <img src={CrossIcon} alt="CrossIcongrey" className="w-4 h-4" />
            )}
          </button>
        ))}
        {/* <button className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]">
          ''
        </button>
        <button className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]">
          ''
        </button>
        <button className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]">
          ''
        </button>
        <button className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]">
          ''
        </button>
        <button className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]">
          ''
        </button>
        <button className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]">
          ''
        </button>
        <button className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]">
          ''
        </button>
        <button className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]">
          ''
        </button> */}
      </div>
      <div className="flex items-center justify-between text-xs text-black gap-2 ">
        <button className="bg-cyan-500 flex flex-col py-1 rounded-lg font-bold w-20">
          X (YOU)<span className="text-xl">{playerXScore}</span>
        </button>
        <button className="bg-blue-300 flex flex-col py-1 font-bold rounded-lg w-24">
          TIES <span className="text-xl">0</span>
        </button>
        <button className="bg-yellow-400 flex flex-col py-1 rounded-lg font-bold w-24">
          O (CPU) <span className="text-xl">{playerOScore}</span>
        </button>
      </div>
      {showModal == true ? <WinnersModalComp /> : null}
      {/* if it is true then render the component */}
      {/* {showModal && <WinnersModalComp />} */}
    </main>
  );
};

export default Game;
