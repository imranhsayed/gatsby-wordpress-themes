/**
 * External dependencies.
 */
import PropTypes from 'prop-types';
import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

/**
 * Internal dependencies.
 */
import Nav from './nav';
import './style.scss';
import Image from "./image";
import SEO from "../seo";

const Header = ( { data } ) => {
	const { header: { siteTitle, siteTagLine, siteLogoUrl }, headerMenuItems } = data.HWGraphQL;

	return (
		<header className="site-header-container container">
			<div className="site-header">
				<div className="site-brand">
					<Link to="/">
						{ siteLogoUrl ? <img className="site-brand__logo" src={ siteLogoUrl } width="68" height="55"
						                     alt="header logo"/> : <Image/> }
					</Link>
					<div>
						<h2 className="screen-reader-text site-brand__title">{ siteTitle }</h2>
						<p className="site-brand__description">{ siteTagLine }</p>
					</div>
				</div>

				<Nav headerMenuItems={ headerMenuItems }/>
			</div>
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: 'Phoenix: Gatsby WordPress Theme',
};

export { Header };

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
