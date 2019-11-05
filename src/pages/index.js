import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

// import {graphql, useStaticQuery} from 'gatsby'
// import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => {

// const data = useStaticQuery(graphql`
//   query {
//       desktop: file(relativePath: { eq: "favicon-icon.png" }) {
//       childImageSharp {
//           fluid(quality: 80, maxWidth: 1920) {
//           ...GatsbyImageSharpFluid_withWebp
//           }
//       }
//       }
//   }
//   `)
// const bgImageData = data.desktop.childImageSharp.fluid

return (
// If you need a full page background image
// <BackgroundImage
// Tag="div"
// className={'bgImage'}
// fluid={bgImageData}
// backgroundColor={'#000'}
// style={{backgroundPositionY: '0' }}
// > 

  <Layout pageName="home">
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/about/">Go to About page</Link>
  </Layout>

// </BackgroundImage>
)
}

export default IndexPage
