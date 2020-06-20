/**
 * External dependencies.
 */
import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

/**
 * Internal dependencies.
 */
import SEO from "../seo";
import { Header } from "./header-static";

/**
 * Default Header Component Export.
 *
 * @return {*}
 */
export default ( props ) => {

	return (
		<StaticQuery
			query={ graphql`
				    query HeaderQuery {
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
				        }
				    }
				` }
			render={ data => (
				<>
					<SEO title="Phoenix: Gatsby WordPress Theme" header={ data.HWGraphQL.header }/>
					<Header data={ data }/>
				</>
			) }
		/>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: 'Phoenix: Gatsby WordPress Theme',
	data: {
		HWGraphQL: {}
	},
};
