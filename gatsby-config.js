module.exports = {
  siteMetadata: {
    title: `Фемида: юридический центр<`,
    description: ``,
    author: `@eastkorzh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E6B980`,
        theme_color: `#E6B980`,
        display: `minimal-ui`,
        icon: `src/img/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-root-import',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://cms.femidamurino.ru`,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `ndfls`, 
          `courts`, 
          `landings`,
          `deedofgifts`,
          `accountings`,
          `buysales`,
          `claims`,
          `mfcs`,
          `registrations`,
          `liquidations`,
          `editings`,
          `subscribes`,
        ],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
