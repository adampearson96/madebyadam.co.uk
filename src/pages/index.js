import React from "react"
import Layout from '../components/Layout/Layout';
import SocialMediaBar from '../components/SocialMediaBar/SocialMediaBar';
import GetInTouchHero from '../components/GetInTouchHero/GetInTouchHero';
import "../scss/index.scss";

import mbaIphone from "../media/mba-iphone-1440px.webp";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="hero-section">
          <div class="left-column">
            <h1><span>Hello,</span> I'm Adam Pearson</h1>
            <p>Just an ambitious 23 year old web developer from Leeds, UK.</p>
            <p>With over 5 years experience in Web Development, I'm looking for a new challenge which will take my career to the next level.</p>
            <SocialMediaBar />
          </div>
          <div class="right-column">
            <img src={mbaIphone} alt="" />
          </div>
        </section>
        <GetInTouchHero />
      </Layout>
    )
  }
}

export default Index;