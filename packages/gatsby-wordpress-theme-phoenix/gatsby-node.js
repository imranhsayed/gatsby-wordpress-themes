const createAllPosts = require( './create-pages/pages' );
const createAllPages = require( './create-pages/posts' );
const createFrontPage = require( './create-pages/front-page' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createAllPages( { actions, graphql } );
	await createAllPosts( { actions, graphql } );
	await createFrontPage( { actions, graphql } );
};
