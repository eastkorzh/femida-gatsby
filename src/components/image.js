import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
const a = 1;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "femida.png" }) {
        childImageSharp {
          fluid(maxWidth: 670) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img 
    style={{height: '100%',  width: 'auto'}} 
    fluid={data.placeholderImage.childImageSharp.fluid} 
    imgStyle={{ objectFit: 'contain' }}
  />
}

export default Image
