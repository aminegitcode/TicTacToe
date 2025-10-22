import Winner from "./Winner";
import Cell from "./Cell";
import GameStats from "./GameStats";
import Button from "./Button";
import Play_again from "./Play_again";
import Clear from "./Clear";
import GameState from "./GameState";

function Board({
  cells,
  handleCellClick,
  playerturn,
  winningCombo,
  gameState,
  Draws,
  Xs_Wins,
  Os_Wins,
  handleClearData,
  handlePlayAgain,
}) {
  const setClassWinner = (index) => {
    return winningCombo &&
      winningCombo.includes(index) &&
      gameState !== GameState.InProgress &&
      gameState !== GameState.Draw
      ? "winnig-cell"
      : "";
  };

  return (
    <div className="board">
      <div className="cases_board">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            onlick={() => handleCellClick(index)}
            playerturn={playerturn}
            value={cell}
            classNameStyle={setClassWinner(index)}
            gameState={gameState}
          />
        ))}
      </div>

      <div className="winner_board">
        <Winner gameState={gameState} />
      </div>

      <div className="gameStats_board">
        <GameStats Draws={Draws} Xs_Wins={Xs_Wins} Os_Wins={Os_Wins} />
      </div>

      <Clear
        Xs_Wins={Xs_Wins}
        Draws={Draws}
        Os_Wins={Os_Wins}
        handleClearData={handleClearData}
      />
      <Play_again gameState={gameState} handlePlayAgain={handlePlayAgain} />
    </div>
  );
}

export default Board;
