const createAllPosts = require( './create-pages/pages' );
const createAllPages = require( './create-pages/posts' );
const createFrontPage = require( './create-pages/front-page' );
const createBlogPage = require( './create-pages/blog' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createAllPages( { actions, graphql } );
	await createAllPosts( { actions, graphql } );
	await createFrontPage( { actions, graphql } );
	await createBlogPage( { actions, graphql } );
};
