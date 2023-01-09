// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./App.css";

const TicTacToe = () => {
  const [player, setPlayer] = useState("X");
  const [fieldValues, setFieldValues] = useState(["", "", "", "", "", "", "", "", ""]);
  const [gameover, setGameover] = useState(false);

  const handleFieldClick = (index, value) => {
    let fieldValuesCopy = [...fieldValues];
    if (value === "" && gameover === false) {
      fieldValuesCopy[index] = player;
      setFieldValues(fieldValuesCopy);
      setPlayer(player === "X" ? "O" : "X");
    }
    let winner = whoIsWinner(fieldValuesCopy);
    if (winner === "X" || winner === "O") {
      setGameover(true);
    }
  };

  const whoIsWinner = (array) => {
    if (
      (array[0] !== "" &&
        array[0] === array[1] &&
        array[0] === array[2]) ||
      (array[3] !== "" &&
        array[3] === array[4] &&
        array[3] === array[5]) ||
      (array[6] !== "" &&
        array[6] === array[7] &&
        array[6] === array[8]) ||
      (array[0] !== "" &&
        array[0] === array[3] &&
        array[0] === array[6]) ||
      (array[1] !== "" &&
        array[1] === array[4] &&
        array[1] === array[7]) ||
      (array[2] !== "" &&
        array[2] === array[5] &&
        array[2] === array[8]) ||
      (array[0] !== "" &&
        array[0] === array[4] &&
        array[0] === array[8]) ||
      (array[2] !== "" &&
        array[2] === array[4] &&
        array[2] === array[6])
    ) {
      return array[0];
    } else {
      return "";
    }
  };

  const startNewGame = () => {
    setPlayer("X");
    setFieldValues(["", "", "", "", "", "", "", "", ""]);
    setGameover(false);
  };

return (
    <div className="deck">
      { !gameover && <div className="status">Ходит игрок {player}</div> }
      { gameover && <div className="status">Игрок {whoIsWinner(fieldValues)} выиграл!</div> }
      <div className="field">
        { fieldValues.map((value, index) => (
          <div className="field__cell" onClick={() => handleFieldClick(index, value)}>{value}</div>
        )) }
      </div>
      <button onClick={startNewGame} className="field__btn">Начать заново</button>
    </div>
  );
};

export default TicTacToe;