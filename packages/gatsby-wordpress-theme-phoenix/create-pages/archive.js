const { slash } = require( `gatsby-core-utils` );
const singlePageTemplate = require.resolve(`../src/templates/archive/index.js`);
const createPaginatedPages = require('gatsby-paginate');

// Get all the posts.
const GET_POSTS = `
query GET_POSTS {
  HWGraphQL {
	categories {
    edges {
      node {
        name
        slug
        uri
        id
        posts(first: 5000) {
          edges {
            node {
              id
              title
              uri
              date
              categories {
                edges {
                  node {
                    name
                    uri
                  }
                }
              }
              author {
                name
                uri
              }
              featuredImage {
                id
                altText
                sourceUrl
                srcSet
                sizes
                mediaDetails {
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
  }
}
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get all posts and posts, this will return the posts and posts.
		return await graphql( GET_POSTS )
			.then( ( { data } ) => {

				const { HWGraphQL: { categories } } = data;

				return { categories: categories.edges };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e categories to create categories pages.
	await fetchPosts().then( ( { categories } ) => {

		// 2. Create Single PAGE: Loop through all categories and create single archive page for posts.
		categories &&
		categories.map( ( category ) => {

			/**
			 * Create Archive Pages with Pagination.
			 * This will create a each paginaion page in this loop at different URLs ( category.node.uri ) e.g. /category/adventure/
			 * And category ( which contains posts that belong to that category will be available )
			 *
			 * Paginated pages will be available at e.g. ( /category/adventure/ /category/adventure/2, /category/adventure/3 ) etc.
			 */
			createPaginatedPages({
				edges: category.node.posts.edges,
				createPage: createPage,
				pageTemplate: singlePageTemplate,
				pageLength: 2, // This is optional and defaults to 10 if not used
				pathPrefix: `${ category.node.uri.replace(/^\/|\/$/g, '') }`, // This is optional and defaults to an empty string if not used ( replaced the begining and trailing slash )
				context: { ...category }, // This is optional and defaults to an empty object if not used
			})

		} );

	} )

};
