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
      <div class="outer-container">
        <div class="social-media">
          <h6>Social media</h6>
          <div class="links">
            <a href="https://www.facebook.com/adam.pearson.1996" class="facebook">
              <img src={facebook} alt="" />
              Facebook
              </a>
            <a href="https://twitter.com/adampearson0796" class="twitter">
              <img src={twitter} alt="" />
              Twitter
            </a>
            <a href="https://www.instagram.com/adampearson96/" class="instagram">
              <img src={instagram} alt="" />
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/adam-pearson-511569b2/" class="linkedin">
              <img src={linkedin} alt="" />
              LinkedIn
            </a>
          </div>
        </div>
        <div class="copyright">
          © copyright 2020 
        </div>
      </div>
    </footer>
  )
}

export default Footer;