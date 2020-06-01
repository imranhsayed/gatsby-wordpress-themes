const { slash } = require( `gatsby-core-utils` );
const singlePageTemplate = require.resolve(`../src/templates/post/index.js`);

// Get all the posts.
const GET_POSTS = `
query GET_POSTS {
  HWGraphQL {
    posts( first: 5000 ) {
      nodes {
        id
        title
        excerpt
        content
        date
        uri
		featuredImage {
			altText
			sourceUrl
            sourceUrlSharp {
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
               }
            }
          }
        }
      }
    }
    categories(first: 5) {
	    edges {
	      node {
	        id
	        name
	        slug
	        uri
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

				const { HWGraphQL: { posts, categories } } = data;

				return { posts: posts.nodes, categories: categories.edges };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e posts to create posts.
	await fetchPosts().then( ( { posts, categories } ) => {

		// 2. Create Single PAGE: Loop through all posts and create single posts for posts.
		posts &&
		posts.map( ( page ) => {

			createPage( {
				path: `${ page.uri }`,
				component: slash( singlePageTemplate ),
				context: { ...page, categories }, // pass single post page data in context, so its available in the singlePagetTemplate in props.pageContext.
			} );

		} );

	} )

};
