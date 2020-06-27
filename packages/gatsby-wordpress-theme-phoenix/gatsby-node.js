const createAllPages = require( './create-pages/pages' );
const createAllPosts = require( './create-pages/posts' );
const createFrontPage = require( './create-pages/front-page' );
const createBlogPage = require( './create-pages/blog' );
const createArchivePage = require( './create-pages/archive' );
const path = require( 'path' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createAllPages( { actions, graphql } );
	await createAllPosts( { actions, graphql } );
	await createFrontPage( { actions, graphql } );
	await createBlogPage( { actions, graphql } );
	await createArchivePage( { actions, graphql } );
};

/**
 * Since the node_modules ( packages ) live outside the theme directory, making an alias for them.
 *
 * So Gutenberg styles can be accessed like so `@import "~@wordpress/base-styles/colors"`
 *
 * @param stage
 * @param actions
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'~': path.resolve(__dirname, '../../node_modules')
			}
		},
	})
};
