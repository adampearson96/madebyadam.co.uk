import React from "react"
import Layout from '../components/Layout/Layout';
import SocialMediaBar from '../components/SocialMediaBar/SocialMediaBar';
import GetInTouchHero from '../components/GetInTouchHero/GetInTouchHero';
import "../scss/index.scss";

import mbaIphone from "../media/mba-iphone-1440px.webp";
import me from "../media/me.webp";
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
        <section className="biography">
          <div className="left-column">
            <img src={me} alt="" />
          </div>
          <div className="right-column">
            <p>I like to use modern technology to create clean, crisp and engaging websites with a focus on <span>UX</span> and <span>performance.</span></p>
          </div>
        </section>
        <GetInTouchHero />
      </Layout>
    )
  }
}

export default Index;