import React from 'react'

export default function Player(props) {
    return (
        <div>
            <input type="text" name="playerName" value={props.player.name} onChange={(e) => props.updatePlayerName(props.player.id, e)} placeholder={`Player ${props.playerIndex + 1}`} />

            {(props.totalPlayers>1) && <div className="playerScore">Score: {props.player.score}</div>}

            <input type="text" name="playerGuess" value={props.player.currentGuess} onChange={(e) => props.updatePlayerGuess(props.player.id, e)} placeholder={`Guess`} />

            <button onClick={props.removePlayer.bind(this, props.player.id)}>Remove Player</button>
        </div>
    )
}
