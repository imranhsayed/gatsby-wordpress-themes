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
	      featuredPostsSection {
	        heading
	        featuredPosts {
	          ... on hwgraphql_Post {
	            id
	            title
	            excerpt
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
	  
	  allPosts: posts( first: 5000 ) {
	      nodes {
	        id
	        title
	        excerpt
	        content
	        date
	        uri
	        author {
	          name
	        }
	        categories {
	          edges {
	            node {
	              name
	            }
	          }
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
  }
}
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get home page data.
		return await graphql( GET_FRONT_PAGE )
			.then( ( { data } ) => {

				const { HWGraphQL: { pageBy, posts, allPosts } } = data;

				let allThePosts = [];
				allPosts.nodes && allPosts.nodes.map( post => {

					// Push the categories data in form of an array, to make it searchable
					let postData = post;
					postData.categoriesData = [];

					postData.categories.edges.map( category => {
						postData.categoriesData.push( category.node.name );
					} );

					allThePosts.push( postData );

				} );

				return { page: pageBy, posts: posts.nodes, allPosts: allThePosts };
			} );
	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page, posts, allPosts } ) => {

		createPage( {
			path: `/`,
			component: slash( frontPageTemplate ),
			context: {
				page,
				posts,
				postSearchData: {
					allPosts: allPosts,
					options: {
						indexStrategy: `Prefix match`,
						searchSanitizer: `Lower Case`,
						TitleIndex: true,
						AuthorIndex: true,
						CategoryIndex: true,
						SearchByTerm: true,
					},
				},
			},
		} );

	} )

};

