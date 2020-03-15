import React from "react"
import { graphql } from "gatsby"
import PortfolioLink from "../PortfolioLink/PortfolioLink.js"

const PortfolioList = ({ data }) => {
  
  return (
    <section className="portfolio-list">
      <div className="outer-container">
        {data}
      </div>
    </section>
  )
}

export default PortfolioList

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {slug: {regex: "/portfolio/"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
        }
      }
    }
  }
`