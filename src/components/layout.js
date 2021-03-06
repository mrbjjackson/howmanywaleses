/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from './header'
import { useStaticQuery, graphql } from "gatsby"


const Layout = ({ children, pageName='default', showAnswer, shortScreen}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <div className={showAnswer ? "allContainer showAnswer" : 'allContainer hideAnswer'}>
      <div className={`pageContainer ${pageName} ${shortScreen}`}>
      <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
      </div>
      <footer>
            © {new Date().getFullYear()}, Website built by <a href="mailto:ben@mrbjjackson.com">Mr BJ Jackson</a> based on a game by invented by Richard in Reading and discovered on the <a href="https://www.bbc.co.uk/programmes/m0005fdz" target="_blank" rel="noopener noreferrer">Elis James and John Robins radio show</a>.
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
