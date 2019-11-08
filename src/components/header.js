import PropTypes from "prop-types"
import React, { Component } from "react"

// import { Link } from "gatsby"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faFacebook, faSpotify } from '@fortawesome/free-brands-svg-icons'

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

