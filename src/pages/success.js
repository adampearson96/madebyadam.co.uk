import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from '../components/Layout/Layout';

import "../scss/success.scss"

const Success = ({ data }) => (
  <Layout>
    <div className="success-page">
      <section className="hero-section">
        <div className="outer-container">
          <div className="col-one"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="600"
            data-sal-easing="easeOutQuart">
            <h1>Thank you, your form has been submitted successfully.</h1>
            <p>I will be in touch as soon as possible.</p>
            <Link
              to="/"
              className="btn">
                Back to home
            </Link>
          </div>
          <div className="col-two"
            data-sal="fade"
            data-sal-duration="600"
            data-sal-delay="300"
            data-sal-easing="easeOutQuart">
            <Img fluid={data.file.childImageSharp.fluid} alt="" />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success;

export const query = graphql`
  query {
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`