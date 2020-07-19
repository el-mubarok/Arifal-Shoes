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

const Image = ({which=0, name=null}) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hero_man: file(relativePath: { eq: "hero_image_man.png" }) {
        childImageSharp {
          fluid(maxWidth: 1365) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hero_woman: file(relativePath: { eq: "hero_image_woman.png" }) {
        childImageSharp {
          fluid(maxWidth: 1365) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      product_1: file(relativePath: { eq: "ars-d01_02.png" }) {
        childImageSharp {
          fluid(maxWidth: 1365) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      product_2: file(relativePath: { eq: "ars-kate01_022.png" }) {
        childImageSharp {
          fluid(maxWidth: 1365) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      product_3: file(relativePath: { eq: "ars-slop01_02.png" }) {
        childImageSharp {
          fluid(maxWidth: 1365) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footer_left_img: file(relativePath: { eq: "footer_left_img.png" }) {
        childImageSharp {
          fluid(maxWidth: 424) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footer_right_img: file(relativePath: { eq: "footer_right_img.png" }) {
        childImageSharp {
          fluid(maxWidth: 424) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let which_image = null

  switch(which){
    case 0:
      which_image = data.logo.childImageSharp.fluid
      break;
    case 1:
      which_image = data.hero_man.childImageSharp.fluid
      break;
    case 2:
      which_image = data.hero_woman.childImageSharp.fluid
      break;

    case 3:
      which_image = data.footer_left_img.childImageSharp.fluid
      break;
    case 4:
      which_image = data.footer_right_img.childImageSharp.fluid
      break;
  }
  {console.log("NAME : ",name)}
  {console.log("Hello",data.product_2)}
  if(name && data[name]) which_image = data[name].childImageSharp.fluid

  return <Img fluid={which_image} />
}

export default Image
