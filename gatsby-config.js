/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Chronic Pain Physical Therapy LLC",
    titleTemplate: "Chronic Pain Physical Therapy | 2500 North Mayfair Road Suite 300 Wauwatosa WI 53226",
    description: "Wisconsin Chronic Pain Physical Therapy, Inc. was founded in 2018 specifically to provide physical therapy services to chronic pain patients. Our team focuses on and wants to see chronic pain patients. The entire focus is on improving quality of life.",
    siteUrl: "https://www.chronicpainphysicaltherapy.com/",
    author: "SURGECODERS",
    authorSite: "https://surgecoders.com",
    image: "/yellow-metal-design-decoration.jpg",
    twitterUsername: "@twitter",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
