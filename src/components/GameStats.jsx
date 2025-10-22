function GameStats({ Draws, Xs_Wins, Os_Wins }) {
  return (
    <div
      className="
    gameStats"
    >
      <div className="x_wins"> X's wins : <span>{Xs_Wins}</span></div>
      <div className="draw"> Draw :<span> {Draws}</span></div>
      <div className="y_wins"> O's wins  :<span> {Os_Wins}</span></div>
    </div>
  );
}

export default GameStats;
