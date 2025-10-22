import React from 'react'
import GameState from './GameState'
import Button from "./Button";

function Play_again({ gameState, handlePlayAgain }) {
  if (gameState == GameState.InProgress) {
    return <> </>;
  } else {
    return <Button text="Play Again" className="play_again_button" onClick={handlePlayAgain}></Button>;
  }
}

export default Play_again
