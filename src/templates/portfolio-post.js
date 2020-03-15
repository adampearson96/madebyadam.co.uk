import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Img from "gatsby-image"

import "../scss/portfolioPost.scss"

export default ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className="portfolio-post">
        <section className="hero-section">
          <div className="outer-container">
            <div className="left-column">
              <h1>{post.title}</h1>
              <p>{post.projectDescription}</p>
            </div>
            <div className="right-column">
              <Img fluid={post.heroimage.childImageSharp.fluid} />
            </div>
          </div>
        </section>
        <section className="tags">
          <div className="outer-container">
            <ul>
              {post.techStack.map(techStackItem => {
                return  <li data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay="600"
                  data-sal-easing="easeOutQuart">{techStackItem}</li>
              })
              }
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        projectDescription
        techStack
      }
    }
  }
`