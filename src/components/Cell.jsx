import React from "react";
import GameState from "./GameState";
function Cell({ value, onlick, playerturn, classNameStyle, style, gameState }) {
  let hoverClass = null;

  if (
    value == null &&
    playerturn != null &&
    gameState == GameState.InProgress
  ) {
    hoverClass = ` ${playerturn.toLowerCase()}_hover `;
  }

  return (
    <div
      className={`cell  ${hoverClass} ${classNameStyle}`}
      onClick={onlick}
      style={style}
    >
      {value}
    </div>
  );
}

export default Cell;
