require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Kennedy Circle`,
    description: `Situated in a sophisticated enclave of Milton, Ontario, 0 Kennedy Circle condominiums offer residents modern conveniences, an eloquent lifestyle, and superb attention to detail.`,
    author: `gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#efbf61`,
        theme_color: `#efbf61`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    //`gatsby-plugin-offline`,
  ],
}
