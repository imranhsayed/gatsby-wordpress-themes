const blogTemplate = require.resolve( '../src/templates/blog-template' );
const singlePostTemplate = require.resolve( '../src/templates/single/Post' );

const GET_POSTS = `
query GET_POSTS {
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
  }
}
`;

const allPosts = [];

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {
		return await graphql( GET_POSTS )
			.then( ( { data } ) => {

				const {
					      HWGraphQL: {
						      posts: {
							      nodes
						      }
					      }
				      } = data;

				const blogPagePath = '/blog';
				const nodeIds = nodes.map( node => node.postId );

				blogPage = {
					path: blogPagePath,
					component: blogTemplate,
					context: {
						ids: nodeIds,
						nodes
					}
				};

				nodes && nodes.map( post => {
					allPosts.push( post );
				});
				return allPosts;
			} );
	};

	await fetchPosts().then( allPosts => {
		allPosts &&
		allPosts.map( ( post ) => {
			createPage( {
				path: `/blog/${post.uri}`,
				component: singlePostTemplate,
				context: {
					...post
				}
			} );
		});

		createPage( blogPage );
	} )

};
