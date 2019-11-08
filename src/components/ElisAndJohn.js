import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function ElisAndJohn() {

    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "elis and john.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className="elisAndJohn">
            <div className="thoughtBubble">
                <h3>What's all this about then?</h3>
                <p><strong>How Many Waleses?</strong> is a game that featured on the "Made Up Games" featured on the Elis James and John Robins BBC 5Live radio show <a href="https://www.bbc.co.uk/sounds/play/m0009t88" target="_blank" rel="noopener noreferrer">(1hr15mins into this episode).</a></p>
                <p>The game was originally suggested by Richard in Reading and this website was created by me, <a href="https://www.instagram.com/mrbjjackson/" target="_blank" rel="noopener noreferrer">Ben Jackson</a>. I'm a music producer and web developer from Cornwall. I made it mainly because it's just a bit of fun isn't it? And also as a way to practice some new web development skills I've been teaching myself lately.</p>
            </div>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
    )
}
