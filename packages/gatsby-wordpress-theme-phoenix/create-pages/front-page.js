const { slash } = require( `gatsby-core-utils` );
const frontPageTemplate = require.resolve(`../src/templates/front-page/index.js`);

// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  HWGraphQL {
	  pageBy(uri: "home") {
	    title
	    frontPageMeta {
	      fieldGroupName
	      banner {
	        fieldGroupName
	        title
	        description
	        image {
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
	        pageLink {
	          ... on hwgraphql_Page {
	            id
	            uri
	          }
	        }
	        pageLinkText
	      }
	      searchSection {
	        fieldGroupName
	        searchLabel
	        backgroundImage {
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
	        taxonomies {
	          name
	          uri
	        }
	        taxonomyIconOne {
	          id
	          altText
	          sourceUrl
	        }
	        taxonomyIconTwo {
	          id
	          altText
	          sourceUrl
	        }
	        taxonomyIconThree {
	          id
	          altText
	          sourceUrl
	        }
	      }
	      featuredPosts {
	        ... on hwgraphql_Post {
	          id
	          title
	          excerpt
	          date
	          uri
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
	  posts(first: 3) {
	    nodes {
	      id
	      title
	      excerpt
	      date
	      uri
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
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get home page data.
		return await graphql( GET_FRONT_PAGE )
			.then( ( { data } ) => {

				const { HWGraphQL: { pageBy, posts } } = data;
				return { page: pageBy, posts: posts.nodes };
			} );
	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page, posts } ) => {

		createPage( {
			path: `/`,
			component: slash( frontPageTemplate ),
			context: { page, posts },
		} );

	} )

};
