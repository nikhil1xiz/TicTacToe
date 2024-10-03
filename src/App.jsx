import React, { useState, useEffect } from "react";
import "./App.css";
import Block from "./components/Block";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    if(!state.includes(null))alert(`No winners`)
    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const handleBlockClick = (index) => {
    if (state[index] !== null || winner) return; // Prevent moves if there's a winner
    const stateCopy = [...state];
    stateCopy[index] = turn;
    setState(stateCopy);
    setTurn(turn === "X" ? "O" : "X");
  };

  useEffect(() => {
    const gameWinner = checkWinner();
    if (gameWinner) {
      setWinner(gameWinner);
    }
  }, [state]); // Check for winner whenever state changes

  return (
    <>
      <div className="board">
        <div className="row">
          <Block value={state[0]} onClick={() => handleBlockClick(0)} />
          <Block value={state[1]} onClick={() => handleBlockClick(1)} />
          <Block value={state[2]} onClick={() => handleBlockClick(2)} />
        </div>
        <div className="row">
          <Block value={state[3]} onClick={() => handleBlockClick(3)} />
          <Block value={state[4]} onClick={() => handleBlockClick(4)} />
          <Block value={state[5]} onClick={() => handleBlockClick(5)} />
        </div>
        <div className="row">
          <Block value={state[6]} onClick={() => handleBlockClick(6)} />
          <Block value={state[7]} onClick={() => handleBlockClick(7)} />
          <Block value={state[8]} onClick={() => handleBlockClick(8)} />
        </div>
      </div>
      {winner && <div className="winner">Winner: {winner}</div>}
    </>
  );
}

export default App;
