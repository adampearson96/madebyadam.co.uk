import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout"
import PortfolioLink from "../components/PortfolioLink/PortfolioLink";
import GetInTouchHero from "../components/GetInTouchHero/GetInTouchHero"
import "../scss/index.scss";

export default ({ data }) => {

  const posts = data.portfolio.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => 
      <PortfolioLink
        key={edge.node.id}
        post={edge.node}
      />)
  return (
    <Layout>
      <section className="hero-section">
        <div className="outer-container">
          <div className="left-column">
            <h1><span>Hello,</span> I'm Adam Pearson</h1>
            <p>Just an ambitious 23 year old web developer from Leeds, UK.</p>
            <p>With over 5 years experience in Web Development, I'm looking for a new challenge which will take my career to the next level.</p>
            <a className="btn get-in-touch" href="/#get-in-touch-hero">Get in touch</a>
          </div>
          <div className="right-column">
            <Img fluid={data.image1.childImageSharp.fluid} alt="" />
          </div>
        </div>
      </section>
      <section className="biography">
        <div className="outer-container">
          <div className="left-column"
            data-sal="fade"
            data-sal-duration="600"
            data-sal-delay="300"
            data-sal-easing="easeOutQuart">
          <Img 
            fluid={data.image2.childImageSharp.fluid} alt="" />
          </div>
          <div className="right-column" 
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="600"
            data-sal-easing="easeOutQuart">
            <p>I like to use modern technology to create clean, crisp and engaging websites with a focus on <span>engagement</span>, <span>UX</span> and <span>performance</span>.</p>
          </div>
        </div>
      </section>
      <section id="selected-work" className="portfolio-list">
        <div className="outer-container">
          <h2>Selected work</h2>
          <div className="outer-container">
            {posts}
          </div>
        </div>
      </section>
      <GetInTouchHero />
    </Layout>
  )
}

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const query = graphql`
  query {
    image1: file(relativePath: { eq: "mba-iphone.png" }) {
      ...squareImage
    }
    image2: file(relativePath: { eq: "me.png" }) {
      ...squareImage
    }
    portfolio: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {slug: {regex: "/portfolio/"}}}, limit: 8) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM, YYYY")
            path
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`