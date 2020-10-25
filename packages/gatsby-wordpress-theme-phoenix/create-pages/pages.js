const { slash } = require( `gatsby-core-utils` );
const customTemplates = [ '/blog/', '/', '/blog', 'blog' ];
const singlePageTemplate = require.resolve(`../src/templates/page/index.js`);
const {SeoFragment} = require( './fragments/seo/index.js' );

// Get all the pages.
const GET_PAGES = `
query GET_PAGES {
  HWGraphQL {
    pages( first: 5000 ) {
      nodes {
        id
        databaseId
        bodyClasses
        title
        content
        date
        uri
        seo {
          ...SeoFragment
        }
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
${SeoFragment}
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get all posts and pages, this will return the posts and pages.
		return await graphql( GET_PAGES )
			.then( ( { data } ) => {

				const { HWGraphQL: { pages, categories } } = data;

				return { pages: pages.nodes , categories: categories.edges };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
	await fetchPosts().then( ( { pages, categories } ) => {

		// 2. Create Single PAGE: Loop through all pages and create single pages for pages.
		pages &&
		pages.map( ( page ) => {

			// If its not a custom template, create the page.
			if ( ! customTemplates.includes( page.uri ) ) {

				createPage( {
					path: `${ page.uri }`,
					component: slash( singlePageTemplate ),
					context: { ...page, categories }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
				} );

			}

		} );

	} )

};
