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


const Layout = ({ children, pageName='default', showAnswer}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(showAnswer)

  return (
    <div className={showAnswer ? "allContainer showAnswer" : 'allContainer hideAnswer'}>
      <div className={`pageContainer ${pageName}`}>
      <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
      </div>
      <footer>
            © {new Date().getFullYear()}, Website built by <a href="mailto:ben@mrbjjackson.com">Mr BJ Jackson</a> based on a game by invented by Richard in Reading and discovered on the John Robbins and Ellis James radio show.
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
