import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"
import SocialMediaBar from "../components/SocialMediaBar/SocialMediaBar";
import GetInTouchHero from "../components/GetInTouchHero/GetInTouchHero"
import "../scss/index.scss";

export default ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <section className="hero-section">
        <div className="left-column">
          <h1 dangerouslySetInnerHTML={{ __html: post.herosection.heading }}></h1>
          <p>{post.herosection.description01}</p>
          <p>{post.herosection.description02}</p>
          <SocialMediaBar />
        </div>
        <div className="right-column">
          <Img fluid={post.herosection.image.childImageSharp.fluid} alt="" />
        </div>
      </section>
      <section className="biography">
        <div className="left-column">
        <Img 
          fluid={post.section02.image.childImageSharp.fluid} alt="" />
        </div>
        <div 
          className="right-column"
          dangerouslySetInnerHTML={{ __html: post.section02.description }}>
        </div>
      </section>
      <GetInTouchHero />
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Home"}}) {
      frontmatter {
        herosection {
          headinglarge
          headingsmall
          description01
          description02
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100 ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        section02 {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100 ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
