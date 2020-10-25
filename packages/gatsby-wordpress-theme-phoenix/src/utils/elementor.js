import { removeTrailingSlash } from "./functions";
const wordPressSiteUrl = removeTrailingSlash( process.env.GATSBY_WORDPRESS_SITE_URL );

/**
 * Get Elementor CSS Links data
 *
 * @param {int} postId post ID.
 *
 * @return {Array} Elementor CSS Links data.
 */
export const getElementorCssLinksData = ( postId ) => {
	return [
		{
			id: 'google-fonts-1-css',
			link: 'https://fonts.googleapis.com/css?family=Roboto:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic|Roboto Slab:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic|Pacifico:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic|Playfair Display:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic'
		},
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
		{
			id: 'elementor-icons-fa-solid-css',
			link: `${wordPressSiteUrl}/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css`
		}
	]
}
