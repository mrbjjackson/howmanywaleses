/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children, pageName='default'}) => {
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
    <div className="allContainer">
      <div className={`pageContainer ${pageName}`}>
        <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
      </div>
      <footer>
            © {new Date().getFullYear()}, Website built by
            {` `}
            <a href="mailto:ben@mrbjjackson.com">Mr BJ Jackson</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
