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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/pages/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: path.join(__dirname, `src`, `media`),
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
  ]
}