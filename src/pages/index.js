import React, {Component} from "react"
import Area from '../components/Area'
import Players from '../components/Players'
import ElisAndJohn from '../components/ElisAndJohn'

import uuid from "uuid"

import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundImage from 'gatsby-background-image'

export default class IndexPage extends Component {
constructor(props) {
  super(props)

  const countryData = this.props.data.allCountriesAreasPopulationsGdPsCsv.nodes
  const randomCountry = countryData[Math.floor(Math.random()*countryData.length)]

  this.state = {
      country1: 'WAL',
      country2: randomCountry.Country_Code,
      comparison: 'area',
      showAnswer: false,
      answerResults: {
      country1: '',
      country2: '',
      ratio: '',
      comparison: ''
      },
      players: []
  }

  this.country1Change = this.country1Change.bind(this)
  this.country2Change = this.country2Change.bind(this)
  this.answer = this.answer.bind(this)
  this.resetRound = this.resetRound.bind(this)

  this.addPlayer = this.addPlayer.bind(this)
  this.removePlayer = this.removePlayer.bind(this)
  this.updatePlayerName = this.updatePlayerName.bind(this)
  this.updatePlayerGuess = this.updatePlayerGuess.bind(this)

}

country1Change(newCountry) {
  this.setState({country1:newCountry})
}

country2Change(newCountry) {
  this.setState({country2:newCountry})
}


answer() {
  const countryData = this.props.data.allCountriesAreasPopulationsGdPsCsv.nodes
  const country1 = countryData.find((country) => country.Country_Code===this.state.country1)
  const country2 = countryData.find((country) => country.Country_Code===this.state.country2)
  let players = this.state.players

  let ratio = country2.Square_km / country1.Square_km

  if(ratio < 1)
  ratio = Math.round(ratio * 100) / 100

  if(ratio > 1)
  ratio = Math.round(ratio * 10) / 10

  if(ratio > 15)
  ratio = Math.round(ratio)

  const answerResults = {
    country1: country1.Country_Name,
    country2: country2.Country_Name,
    ratio: ratio,
    comparison: this.state.comparison
  }

  if(players.length === 1 ) {
    players.forEach(player => {
      let diff = player.currentGuess - ratio
      
      if(diff<0)
        diff = -1 * diff //make positive
      
      answerResults.difference = diff

    })
  } else if(players.length>1) {
    let currentBestDiff = ''
    let currentBestID = ''
    players.forEach(player => {
      if(player.currentGuess!=='') {
        let diff = player.currentGuess - ratio
        
        if(diff<0)
          diff = -1 * diff //make positive
        
        if((currentBestDiff==='')||(diff<currentBestDiff)) {
        currentBestDiff = diff
        currentBestID = player.id
        }
      }
      //NEED TO MAKE THIS WORK FOR A TIE
    })
    
    players = players.map((player) => {
      if(player.id===currentBestID) {
      player.score=player.score+1

      answerResults.winner = player.name 
      answerResults.difference = Math.round(currentBestDiff)
      }

      return player
    })

    this.setState({players:players})

    }



  this.setState({
    showAnswer: true,
    answerResults: answerResults
  })

}

resetRound() {

  const countryData = this.props.data.allCountriesAreasPopulationsGdPsCsv.nodes
  let players = []
  if(this.state.players.length>0) {
      players = this.state.players.map((player) => {
      player.currentGuess = ''
      return player
    })
  }

  const randomCountry = countryData[Math.floor(Math.random()*countryData.length)]

  this.setState({
    country2: randomCountry.Country_Code,
    showAnswer: false,
    answerResults: {
      country1: '',
      country2: '',
      ratio: '',
      comparison: '',
      winner:'',
      difference:''
    },
    players: players
  })
}

addPlayer() {

  const newPlayer = {
    name:'',
    score:0,
    currentGuess:'',
    id: uuid.v4()
  }

  const currentPlayers = this.state.players

  if(currentPlayers.length === 0) {
    newPlayer.name='John'
  }
  if(currentPlayers.length === 1) {
    newPlayer.name='Elis'
  }  
  if(currentPlayers.length === 2) {
    newPlayer.name='Producer Dave'
  } 
  if(currentPlayers.length === 3) {
    newPlayer.name='Richard in Reading'
  }
  if(currentPlayers.length === 4) {
    newPlayer.name='Robin'
  }
  if(currentPlayers.length > 4) {
    newPlayer.name=currentPlayers.length + 1
  }

  currentPlayers.push(newPlayer)


  this.setState({players: currentPlayers})
}



removePlayer(playerID) {

  let currentPlayers = this.state.players

  currentPlayers = currentPlayers.filter(function(player){
      return player.id !== playerID;
  });

  this.setState({players: currentPlayers})
}


updatePlayerName(playerID, e) {
  let players = this.state.players.map((player) => {
    if(player.id===playerID) {
      player.name = e.target.value
    }
    return player
  })

  this.setState({players: players})

}

updatePlayerGuess(playerID, e) {
  let players = this.state.players.map((player) => {
    if((player.id===playerID)&&(!isNaN(e.target.value))) {
      player.currentGuess = e.target.value
    }
    return player
  })

  this.setState({players: players})
}


render() {

  const rawCountries = this.props.data.allCountriesAreasPopulationsGdPsCsv.nodes
  const bgImageData = this.props.data.file.childImageSharp.fluid

  return (
    <BackgroundImage
    Tag="div"
    className='mainContainer'
    fluid={bgImageData}
    backgroundColor={'#000'}
    style={{backgroundPositionY: '0' }}
    >

    <Layout pageName="home" showAnswer={this.state.showAnswer}>
    <SEO title="How Many Waleses? It's a surface-area-based guessing game" />

    <Area
      rawCountries={rawCountries}
      country1Change={this.country1Change}
      country2Change={this.country2Change}
      country1={this.state.country1}
      country2={this.state.country2}
      showAnswer={this.state.showAnswer}
      answerResults={this.state.answerResults}
      playerCount={this.state.players.length}
      resetRound={this.resetRound} /> 

{ <Players
      addPlayer={this.addPlayer}
      removePlayer={this.removePlayer}
      updatePlayerName={this.updatePlayerName}
      updatePlayerGuess={this.updatePlayerGuess}
      players={this.state.players}
      showAnswer={this.state.showAnswer}
      /> }

   <div className="answerButton">
    { this.state.showAnswer ?
      <button onClick={this.resetRound}>Let's have another go then.</button>
    : <button onClick={this.answer}>Go on, tell me</button>
    } 
    </div>





    {/* <ElisAndJohn /> */}

    </Layout>
    </BackgroundImage>
    )
  }
}

export const countriesQuery = graphql`
query MyQuery {
  allCountriesAreasPopulationsGdPsCsv {
    nodes {
      Country_Code
      Country_Name
      GDP
      Population
      Square_km
    }
  }
  file(relativePath: {eq: "twoSheepBackground.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 65) {
         ...GatsbyImageSharpFluid
       }
    }
  }
}
`
