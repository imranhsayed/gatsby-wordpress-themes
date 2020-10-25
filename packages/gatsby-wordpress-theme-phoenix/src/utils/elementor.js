import { removeTrailingSlash } from "./functions";
const wordPressSiteUrl = removeTrailingSlash( process.env.GATSBY_WORDPRESS_SITE_URL );

export const getElementorCssLinksData = ( postId ) => {
	return [
		{
			id: 'elementor-icons-css',
			link: `${wordPressSiteUrl}/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css`
		},
		{
			id: 'elementor-icons-css',
			link: `${wordPressSiteUrl}/wp-content/plugins/elementor/assets/css/common.min.css`
		},
		{
			id: 'elementor-animations-css',
			link: `${wordPressSiteUrl}/wp-content/plugins/elementor/assets/lib/animations/animations.min.css`
		},
		{
			id: 'elementor-frontend-legacy-css',
			link: `${wordPressSiteUrl}/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css`
		},
		{
			id: 'elementor-frontend-css',
			link: `${wordPressSiteUrl}/wp-content/plugins/elementor/assets/css/frontend.min.css`
		},
		{
			id: 'elementor-global-css',
			link: `${wordPressSiteUrl}/wp-content/uploads/elementor/css/global.css`
		},
		{
			id: `elementor-post-${postId}-css`,
			link: `${wordPressSiteUrl}/wp-content/uploads/elementor/css/post-${postId}.css`
		},
		{
			id: 'elementor-icons-shared-0-css',
			link: `${wordPressSiteUrl}/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css`
		},
		{
			id: 'elementor-icons-fa-brands-css',
			link: `${wordPressSiteUrl}/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css`
		},
		{
			id: 'elementor-icons-fa-solid-css',
			link: `${wordPressSiteUrl}/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css`
		},
	]
}

export const getElementorJsLinksData = () => {
	return [
		{
			id: 'backbone-marionette-js',
			src: `https://codeytek.com/headless-cms/wp-content/plugins/elementor/assets/lib/backbone/backbone.marionette.min.js`
		},
		{
			id: 'backbone-radio-js',
			src: `https://codeytek.com/headless-cms/wp-content/plugins/elementor/assets/lib/backbone/backbone.radio.min.js`
		},
		{
			id: 'elementor-common-modules-js',
			src: `https://codeytek.com/headless-cms/wp-content/plugins/elementor/assets/js/common-modules.min.js`
		},
		{
			id: 'elementor-dialog-js',
			src: `https://codeytek.com/headless-cms/wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js?ver=4.8.1`
		},
		{
			id: 'elementor-common-js',
			src: `https://codeytek.com/headless-cms/wp-content/plugins/elementor/assets/js/common.min.js`
		},
		{
			id: 'elementor-app-loader-js',
			src: `https://codeytek.com/headless-cms/wp-content/plugins/elementor/assets/js/app-loader.min.js`
		},
		{
			id: 'elementor-frontend-modules-js',
			src: `https://codeytek.com/headless-cms/wp-content/plugins/elementor/assets/js/frontend-modules.min.js`
		},
		{
			id: 'elementor-waypoints-js',
			src: `https://codeytek.com/headless-cms/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js`
		},
		{
			id: 'swiper-js',
			src: `https://codeytek.com/headless-cms/wp-content/plugins/elementor/assets/lib/swiper/swiper.min.js`
		},
		{
			id: 'share-link-js',
			src: `https://codeytek.com/headless-cms/wp-content/plugins/elementor/assets/lib/share-link/share-link.min.js`
		},
		{
			id: 'elementor-frontend-js',
			src: `https://codeytek.com/headless-cms/wp-content/plugins/elementor/assets/js/frontend.min.js`
		}
	]
}


// <link rel='stylesheet' id='elementor-animations-css'  href='${wordPressSiteUrl}/wp-content/plugins/elementor/assets/lib/animations/animations.min.css' media='all' />
// <link rel='stylesheet' id='elementor-frontend-legacy-css'  href='${wordPressSiteUrl}/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css' media='all' />
// <link rel='stylesheet' id='elementor-frontend-css'  href='${wordPressSiteUrl}/wp-content/plugins/elementor/assets/css/frontend.min.css' media='all' />
// <link rel='stylesheet' id='elementor-post-507-css'  href='${wordPressSiteUrl}/wp-content/uploads/elementor/css/post-507.css' media='all' />
// <link rel='stylesheet' id='elementor-global-css'  href='${wordPressSiteUrl}/wp-content/uploads/elementor/css/global.css' media='all' />
// <link rel='stylesheet' id='elementor-post-521-css'  href='${wordPressSiteUrl}/wp-content/uploads/elementor/css/post-521.css' media='all' />
// <link rel='stylesheet' id='elementor-icons-shared-0-css'  href='${wordPressSiteUrl}/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css' media='all' />
// <link rel='stylesheet' id='elementor-icons-fa-brands-css'  href='${wordPressSiteUrl}/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css' media='all' />
// <link rel='stylesheet' id='elementor-icons-fa-solid-css'  href='${wordPressSiteUrl}/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css' media='all' />
