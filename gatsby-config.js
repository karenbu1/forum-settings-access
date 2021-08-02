require(`dotenv`).config({path: `.env`,})
const path = require('path')
  
module.exports = {
  siteMetadata: {
    name: `BootUp PD`,
    siteUrl: `https://www.bootuppd.org`,
    tagline: ``,
    githubLink: ``,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
            modules: {
            namedExport: false,
          },
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-remove-fingerprints`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TFZ92LL",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/
        }
      }
    }
  ],
}
