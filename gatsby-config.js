/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Made by Adam.',
    description: 'Frontend Web Developer based in Leeds, UK.',
    image: '',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`, 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/portfolio/`, 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media/`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `spartan:400,500,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Made by Adam",
        short_name: "mba.",
        start_url: "/",
        background_color: "#634de2",
        theme_color: "#fff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "fullscreen",
        orientation: "portrait",
        splash_pages: null,
        icon: `src/media/icon-512x512.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-160651302-1",     
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,  
      },
    },
  ]
}