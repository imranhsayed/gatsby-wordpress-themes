require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Theme`,
    description: `Gatsby WordPress Theme - Formerly known as Spot.IM`,
    author: `@imranhsayed`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
	  {
		  resolve: `gatsby-source-graphql`,
		  options: {
			  fieldName: `HWGraphQL`,
			  url: `${ process.env.SITE_URL }/graphql`,
			  typeName: `hwgraphql`,
			  refetchInterval: 60,
		  },
	  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // For favicon- This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
