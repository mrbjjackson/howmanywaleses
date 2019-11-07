import PropTypes from "prop-types"
import React, { Component } from "react"

import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faSpotify } from '@fortawesome/free-brands-svg-icons'

import "./reset.css"
import "./style.scss"


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = { toggled:false } 

    this.toggleNav = this.toggleNav.bind(this)
  }


  toggleNav() {
    this.setState({toggled: !this.state.toggled})
  }


  render() {
    const navLinks =  <nav>
    <ul>
      <li><Link to="/" activeClassName="active">Home</Link></li>
      <li><Link to="/about" activeClassName="active">About</Link></li>
      <li><a href="https://www.instagram.com">IG <FontAwesomeIcon icon={faInstagram} /></a></li>
      <li><a href="https://www.facbook.com">Facebook <FontAwesomeIcon icon={faFacebook} /></a></li>
      <li><a href="https://www.spotify.com">Spotify <FontAwesomeIcon icon={faSpotify} /></a></li>
    </ul>
  </nav>

return (
<header>


</header>
)}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header

