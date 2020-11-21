require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "Christopher Beaumont",
    subtitle: "Paintings",
    description: `Offical website for the artist painter Chris Beaumont.`,
    author: `@chrisbeaumontcom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve:`gatsby-source-sanity`,
      options: {
        projectId: `1to5m8nu`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN_V2
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ChrisBeaumontPaintings`,
        short_name: `ChrisBeaumont`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cb-zucchinis.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `quicksand\:300,400,500,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
