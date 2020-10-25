import { removeTrailingSlash } from "./functions";

export const singlePostElementorCssLink = ( postId ) => {
	const wordPressSiteUrl = removeTrailingSlash( process.env.GATSBY_WORDPRESS_SITE_URL );
	return `${wordPressSiteUrl}/wp-content/uploads/elementor/css/post-${postId}.css`
}
