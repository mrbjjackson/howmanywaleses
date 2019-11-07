import React from 'react'
import Player from './Player'

export default function Players(props) {
    return (
        <div>
            <button onClick={props.addPlayer} >Add Player</button>

            { (props.players.length>0) && props.players.map((player, playerIndex) => {
                return <Player player={player}
                            playerIndex={playerIndex}
                            removePlayer={props.removePlayer}
                            updatePlayerName={props.updatePlayerName}
                            updatePlayerGuess={props.updatePlayerGuess}
                            totalPlayers={props.players.length}
                            key={player.id}

                            />
            })}
            
        </div>
    )
}
