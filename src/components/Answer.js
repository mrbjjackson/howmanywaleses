import React from 'react'
import {addSesses} from '../components/Area'

export default function Answer(props) {
    return (
        <div className="answerHolder">
            
            <button onClick={props.resetRound}>Let's have another go then.</button>

            <div className="answerFigures">
                <div className="youCouldFit">You could fit</div>
                <div className="answerFigure">{props.answerResults.ratio}</div>
                <div className="inside">{addSesses(props.answerResults.country1)} inside {props.answerResults.country2}</div>
            </div>

            {props.answerResults.winner ? <h4>{props.answerResults.winner} wins! They were off by {props.answerResults.difference}</h4> : '' }
            {(props.playerCount === 1) ? <h4>You were off by {props.answerResults.difference}</h4> : ''}
            
        </div>
    )
}
