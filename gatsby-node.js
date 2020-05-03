const createPosts = require( './utils/create-posts' );

exports.createPages = async ( { actions, graphql } ) => {
	await createPosts( { actions, graphql } );
};
