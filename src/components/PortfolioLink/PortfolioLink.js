import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PortfolioLink = ({ post }) => (
  <div className="portfolio-item"
    data-sal="slide-up"
    data-sal-duration="500"
    data-sal-delay="600"
    data-sal-easing="easeOutQuart">
    <Link to={post.frontmatter.path}>
      <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
      <div className="content">
        <h3>{post.frontmatter.title}</h3>
        <span>{post.frontmatter.date}</span>
      </div>
    </Link>
  </div>
)

export default PortfolioLink