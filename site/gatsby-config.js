require('dotenv').config();

module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using.
		{
		resolve: "gatsby-wordpress-theme-phoenix",
		options: {
			wordPressUrl: `${ process.env.GATSBY_WORDPRESS_SITE_URL }`,
			frontendUrl: `${ process.env.FRONTEND_URL }`
		}
	} ]
};
