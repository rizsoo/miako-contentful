require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `z54h1ca29glj`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `grey`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/miako_fav.png',
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-recaptcha`,
    `gatsby-plugin-sitemap`,
  ],
  siteMetadata: {
    title: `Mi a Kő Étterem`,
    description: `Káli-medencei Borok Háza`,
    image: `/src/assets/miako_fav.png`,
    siteUrl: `https://www.mia-ko.hu`,
  },
}
