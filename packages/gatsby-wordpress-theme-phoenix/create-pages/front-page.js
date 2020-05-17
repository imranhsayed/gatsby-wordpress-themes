const { slash } = require( `gatsby-core-utils` );
const frontPageTemplate = require.resolve(`../src/templates/front-page/index.js`);

// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  HWGraphQL {
    header: getHeader {
      siteLogoUrl
      siteTagLine
      siteTitle
      favicon
    }
    headerMenuItems: menuItems(where: {location: HCMS_MENU_HEADER}) {
      edges {
        node {
          id
          menuItemId
          label
          url
          childItems {
            edges {
              node {
                menuItemId
                label
                url
              }
            }
          }
        }
      }
    }
    footer: getFooter {
      copyrightText
      sidebarOne
      sidebarTwo
      socialLinks {
        iconUrl
        iconName
      }
    }
    footerMenuItems: menuItems(where: {location: HCMS_MENU_FOOTER}) {
      edges {
        node {
          id
          menuItemId
          label
          url
          childItems {
            edges {
              node {
                menuItemId
                label
                url
                id
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
		return await graphql( GET_FRONT_PAGE )
			.then( ( { data } ) => {

				const { HWGraphQL: { header, headerMenuItems, footer, footerMenuItems } } = data;

				return { header, headerMenuItems, footer, footerMenuItems };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e posts to create posts.
	await fetchPosts().then( ( { header, headerMenuItems, footer, footerMenuItems } ) => {

		createPage( {
			path: `/`,
			component: slash( frontPageTemplate ),
			context: { header, headerMenuItems, footer, footerMenuItems },
		} );

	} )

};
