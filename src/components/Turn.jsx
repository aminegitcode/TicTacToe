import React from "react";

function Turn({ player_turn }) {
  return (
    <div className="turn">
      <p>
        <span className="player_turn">{player_turn}</span> Turn
      </p>
    </div>
  );
}

export default Turn;
