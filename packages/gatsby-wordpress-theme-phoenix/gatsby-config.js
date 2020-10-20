module.exports = ({ wordPressUrl, frontendUrl }) => ({
	siteMetadata: {
		title: `Gatsby WordPress Theme`,
		description: `Gatsby WordPress Theme`,
		author: `@imranhsayed`,
		siteUrl: `${frontendUrl}`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby WordPress Theme`,
				short_name: `Phoenix`,
				start_url: `/`,
				background_color: `#eaeaea`,
				theme_color: `#1e5663`,
				display: `minimal-ui`,
				icon: `${__dirname}/src/images/favicon.png`, // For favicon- This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-graphql`,
			options: {
				// This type will contain remote schema Query type
				typeName: `hwgraphql`,
				// This is field under which it's accessible
				fieldName: `HWGraphQL`,
				// Url to query from
				url: `${wordPressUrl}/graphql`,
				refetchInterval: 6000,
			},
		},
		{
			resolve: 'gatsby-plugin-graphql-image',
			options: {
				schemaName: "hwgraphql",
				imageFieldName: "sourceUrl"
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
	],
})
