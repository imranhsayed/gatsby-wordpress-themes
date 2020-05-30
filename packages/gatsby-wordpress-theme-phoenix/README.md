## 🎨 Gatsby WordPress themes
[![Project Status: Active.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A Gatsby theme for WordPress, using Decoupled Architecture.
Front end in React.
Backend in WordPress.

## Maintainer

| Name                                                   | Github Username |
|--------------------------------------------------------|-----------------|
| [Imran Sayed](mailto:codeytek.academy@gmail.com)       |  @imranhsayed   |

## Live Demo

[Demo](https://gatsby-wordpress-theme-phoenix.netlify.app)

![](demos/home-page-demo.png)

## 🚀 Set Up

1. Installation: 
`npm i gatsby-wordpress-theme-phoenix`

2. Add the following configuration to your `gatsby-config.js` and put your WordPress Site URL in `wordPressUrl` e.g. `https://example.com`

```javascript
module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using.
		{
		resolve: "gatsby-wordpress-theme-phoenix",
		options: {
			wordPressUrl: 'xxxx'
		}
	} ]
};
``` 

2. Upload and activate all the plugins from [wordpress/plugins](https://github.com/imranhsayed/gatsby-wordpress-themes/tree/master/wordpress/plugins), into your WordPress Site.

OR,

a. Clone the WordPress plugin [Headless CMS](https://github.com/imranhsayed/headless-cms) in your WordPress
plugin directory and activate it.

b. Clone and activate [wp-graphql](https://github.com/wp-graphql/wp-graphql) -test on ( v0.8.3 ) in WordPress plugin directory.
c. Clone and activate [wp-graphiql](https://github.com/wp-graphql/wp-graphiql) in WordPress plugin directory.
d. Clone and activate [wp-graphql-acf](https://github.com/wp-graphql/wp-graphql-acf) in WordPress plugin directory.
e. Install and activate [ACF WordPress plugin](https://wordpress.org/plugins/advanced-custom-fields/) in the WordPress.

3. - Set Header menu as `HCMS Header Menu`
   
   ![](demos/header-menu-demo.png)
   
   - Set Footer menu as `HCMS Footer Menu`
   ![](demos/footer-menu-demo.png)
   
4. You can also set text widgets in #HCMS Footer #1 and #HCMS Footer #2 under Appearance  > Widgets in WordPress.
5. Import all the ACF data from `wordpress/acf-data` json file of this repo, into WordPress by going to WordPress Dashboard > Custom Fields > Tools > Import
6. Create a Home Page ( if there isn't one already )and make sure you have a home page and Location rule is set to Home page.
![](demos/acf-home-screenshot.png)
7. Add the ACF required data on the Home page from WordPress Dashboard. 
8. If isn't already set your site title, description and logo from WordPress customizer.
