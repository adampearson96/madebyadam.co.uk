/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Made by Adam.',
    description: 'Frontend Web Developer based in Leeds, UK.',
    image: ''
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/pages/portfolio`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ]
}
