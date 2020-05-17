const createAllPages = require( './create-pages/pages' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createAllPages( { actions, graphql } );
};
