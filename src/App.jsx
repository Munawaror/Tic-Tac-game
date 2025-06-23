import { Route, Routes } from "react-router-dom";
import "./App.css";
import SelectPlayerPage from "./page/selectPlayerPage";
import Game from "./page/Game";
import { useState } from "react";

function App() {
    const [playerOneMark, setPlayerOneMark] = useState("X");
    const [playerTwoMark, setPlayerTwoMark] = useState('O');
  return (
    <main className="w-full h-screen bg-[#282c34] flex items-center justify-center">
      <Routes>
        <Route path="/" element={<SelectPlayerPage setPlayerOneMark={setPlayerOneMark} playerOneMark={playerOneMark} setPlayerTwoMark={setPlayerTwoMark} playerTwoMark={playerTwoMark}/>}/>
         <Route path="/select-player" element={<SelectPlayerPage setPlayerOneMark={setPlayerOneMark} playerOneMark={playerOneMark} setPlayerTwoMark={setPlayerTwoMark} playerTwoMark={playerTwoMark}/>}/>
        <Route path="/game" element={<Game setPlayerOneMark={setPlayerOneMark} playerOneMark={playerOneMark} setPlayerTwoMark={setPlayerTwoMark} playerTwoMark={playerTwoMark}/>}/>
      </Routes>
      

    </main>
  );
}

export default App;
