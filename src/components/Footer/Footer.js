import React from 'react';
import './footer.scss';

/* Images */
import facebook from '../../media/social/facebook.svg';
import twitter from '../../media/social/twitter.svg';
import instagram from '../../media/social/instagram.svg';
import linkedin from '../../media/social/linkedin.svg';

const Footer = () => {
  return (
    <footer>
      <div className="outer-container">
        <div className="social-media">
          <h6>Social media</h6>
          <div className="links">
            <a href="https://www.facebook.com/adam.pearson.1996" className="facebook">
              <img src={facebook} alt="" />
              Facebook
              </a>
            <a href="https://twitter.com/adampearson0796" className="twitter">
              <img src={twitter} alt="" />
              Twitter
            </a>
            <a href="https://www.instagram.com/adampearson96/" className="instagram">
              <img src={instagram} alt="" />
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/adam-pearson-511569b2/" className="linkedin">
              <img src={linkedin} alt="" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="copyright">
          © copyright 2020 
        </div>
      </div>
    </footer>
  )
}

export default Footer;