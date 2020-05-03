const path      = require( `path` );
const { slash } = require( `gatsby-core-utils` );

// Templates to be use for creating blogPage for all posts, single post and single page
const blogTemplate       = path.resolve( './src/templates/blog-template.js' );
const singlePostTemplate = path.resolve( './src/templates/single/post.js' );
const singlePageTemplate = path.resolve( './src/templates/single/page.js' );

// Get all the posts and pages.
const GET_POSTS_AND_PAGES = `
query GET_POSTS_AND_PAGES {
  HWGraphQL {
    posts {
      nodes {
        uri
        id
        title
        postId
        excerpt
        content
        featuredImage {
          srcSet
          sourceUrl
        }
      }
    }
    pages {
      nodes {
        uri
        id
        title
        content
        pageId
      }
    }
  }
}
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;
	let blogPage;

	const fetchPosts = async () => {

		// Do query to get all posts and pages, this will return the posts and pages.
		return await graphql( GET_POSTS_AND_PAGES )
			.then( ( { data } ) => {

				const { HWGraphQL: { posts, pages } } = data;

				console.log(JSON.stringify(posts, null, 4));
				console.log(JSON.stringify(pages, null, 4));

				const blogPagePath = '/blog';
				const nodeIds      = posts.nodes.map( post => post.postId );

				blogPage = {
					path: blogPagePath,
					component: slash( blogTemplate ),
					context: {
						ids: nodeIds,
						nodes: posts.nodes
					}
				};

				return {
					posts: posts.nodes,
					pages: pages.nodes
				};
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e posts and pages to create pages.
	await fetchPosts().then( ( { posts, pages } ) => {

		// 1.Create SINGLE POST: Loop through all posts and create single pages for posts.
		posts &&
		posts.map( ( post ) => {

			// Create Single post pages at '/blog/post-slug' .
			createPage( {
				path: `/blog${ post.uri }`,
				component: slash( singlePostTemplate ),
				context: { ...post }, // pass single post data in context, so its available in the singlePostTemplate in props.pageContext.
			} )
		} );

		// 2. Create Single PAGE: Loop through all pages and create single pages for pages.
		pages &&
		pages.map( ( page ) => {

			// Create Single page pages at '/blog/page-slug' .
			createPage( {
				path: `${ page.uri }`,
				component: slash( singlePageTemplate ),
				context: { ...page }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
			} )
		} );

		// 3. ALL BLOGS: Create a single blogPage for listing down all posts.
		createPage( blogPage );

	} )

};
