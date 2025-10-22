import React, { useState, useEffect } from "react";
import Turn from "./Turn";
import Board from "./Board";
import GameState from "./GameState";
import Clear from "./Clear";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  { combo: [0, 1, 2] },
  { combo: [3, 4, 5] },
  { combo: [6, 7, 8] },
  { combo: [0, 3, 6] },
  { combo: [1, 4, 7] },
  { combo: [2, 5, 8] },
  { combo: [0, 4, 8] },
  { combo: [2, 4, 6] },
];

function checkWinner(
  cells,
  setgameState,
  setXs_wins,
  setOs_wins,
  setDraws,
  Xs_Wins,
  Os_Wins,
  Draws
) {
  for (const combination of winningCombinations) {
    const value1 = cells[combination.combo[0]];
    const value2 = cells[combination.combo[1]];
    const value3 = cells[combination.combo[2]];

    if (value1 !== null && value1 === value2 && value2 === value3) {
      if (value1 == PLAYER_X) {
        setgameState(GameState.Xwins); // change the game state to Xwins
        setXs_wins(Xs_Wins + 1);// change X's Wins
      } else {
        setgameState(GameState.Owins); // change the game state to Owins
        setOs_wins(Os_Wins + 1); // change O's Wins
      }
      return combination.combo;
    }

    const areAllCellsFilledIn = cells.every((cell) => cell !== null); //check if all the cells are filed 
    if (areAllCellsFilledIn) {
      setgameState(GameState.Draw); // change the game state to Draw
      setDraws(Draws + 1); 
    }
  }
  return null;
}

function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [winningCombo, setWinningCombo] = useState(null);
  const [gameState, setgameState] = useState(GameState.InProgress);
  const [Xs_Wins, setXs_wins] = useState(0);
  const [Os_Wins, setOs_wins] = useState(0);
  const [Draws, setDraws] = useState(0);

  const handleCellClick = (index) => {
    if (gameState !== GameState.InProgress) {
      return;
    }

    if (cells[index] != null) return;

    const newCells = [...cells]; //
    newCells[index] = playerTurn;
    setCells(newCells);

    setPlayerTurn(playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X);// change the player tun
  };

  useEffect(() => {
    const winner = checkWinner(
      cells,
      setgameState,
      setXs_wins,
      setOs_wins,
      setDraws,
      Xs_Wins,
      Os_Wins,
      Draws
    );
    if (winner) {
      setWinningCombo(winner);
    }
  }, [cells]);


//clear the game stats
  const handleClearData = () => {
    setDraws(0);
    setOs_wins(0);
    setXs_wins(0);
    
  };

  const handlePlayAgain = () => {
    setgameState(GameState.InProgress);
    setPlayerTurn(PLAYER_X);
    setCells(Array(9).fill(null));


    
  }

  return (
    <div className="tictactoe">
      <h1 className="title">
        Let's play <span>TicTacToe</span>
      </h1>
      <Turn player_turn={playerTurn} />
      <Board
        handlePlayAgain={handlePlayAgain}
        cells={cells}
        playerturn={playerTurn}
        handleCellClick={handleCellClick}
        winningCombo={winningCombo}
        gameState={gameState}
        Draws={Draws}
        Xs_Wins={Xs_Wins}
        Os_Wins={Os_Wins}
        handleClearData={handleClearData}
      />
     
    </div>
  );
}

export default TicTacToe;
