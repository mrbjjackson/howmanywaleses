import React from 'react'

export default function Player(props) {
    return (
        <div className="player">
            <input className="playerName" type="text" name="playerName" value={props.player.name} onChange={(e) => props.updatePlayerName(props.player.id, e)} placeholder={`Player ${props.playerIndex + 1}`} />

            <input className="playerGuess"  type="text" name="playerGuess" value={props.player.currentGuess} onChange={(e) => props.updatePlayerGuess(props.player.id, e)} placeholder={`Guess`} />

            {(props.totalPlayers>1) && <div className="playerScore">Score: <div className="scoreFigure">{props.player.score}</div></div>}

            <button className="removePlayer" onClick={props.removePlayer.bind(this, props.player.id)}>Remove Player</button>
        </div>
    )
}
