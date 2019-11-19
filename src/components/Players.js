import React from 'react'
import Player from './Player'

export default function Players(props) {
    return (
      <div className="playersHolder">


        {props.players.length > 0 && (
          <div className="allPlayers">
             <div className="playersHeaders">
                <div className="playerNameHeader">Name</div>
                <div className="playerGuessHeader">Guess</div>
                {props.players.length > 1 &&
                <div className="playerScoreHeader">Score</div>}
            </div>
            {props.players.map((player, playerIndex) => {
              return (
                <Player
                  player={player}
                  playerIndex={playerIndex}
                  removePlayer={props.removePlayer}
                  updatePlayerName={props.updatePlayerName}
                  updatePlayerGuess={props.updatePlayerGuess}
                  totalPlayers={props.players.length}
                  key={player.id}
                  showAnswer={props.showAnswer}
                />
              )
            })}
          </div>
        )}

        <button className="newPlayer" onClick={props.addPlayer}>
          + Add a player
        </button>
      </div>
    )
}
