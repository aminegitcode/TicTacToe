import GameState from "./GameState";

function Winner({ gameState }) {
  switch (gameState) {
    case GameState.InProgress:
      return <></>;
    case GameState.Xwins:
      return <div className="winner">X wins</div>;
    case GameState.Owins:
      return <div className="winner">O wins</div>;
    case GameState.Draw:
      return <div className="winner">Draw</div>;
    default:
      return <></>;
  }
}

export default Winner;
