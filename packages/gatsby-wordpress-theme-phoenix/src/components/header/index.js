/**
 * External dependencies.
 */
import PropTypes from 'prop-types';
import React from 'react';
import { Link, graphql } from 'gatsby';

/**
 * Internal dependencies.
 */
import Nav from './nav';
import './style.scss';
// import Image from "./image";

const Header = ( { data } ) => {
	const { header: { siteTitle, siteTagLine, siteLogoUrl }, headerMenuItems } = data;

	console.warn( 'data', data );

	return (
		<header className="site-header-container container">
			{/*<div className="site-header">*/}
			{/*	<div className="site-brand">*/}
			{/*		<Link to="/" >*/}
			{/*			{ siteLogoUrl ? <img className="site-brand__logo" src={ siteLogoUrl } width="68" height="55" alt="header logo"/> : <Image/> }*/}
			{/*		</Link>*/}
			{/*		<div>*/}
			{/*			<h2 className="screen-reader-text site-brand__title">{ siteTitle }</h2>*/}
			{/*			<p className="site-brand__description">{ siteTagLine }</p>*/}
			{/*		</div>*/}
			{/*	</div>*/}

			{/*	<Nav headerMenuItems={ headerMenuItems }/>*/}
			{/*</div>*/}
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

// export const query = graphql`
//     query {
//         fileName: file(relativePath: { eq: "images/logo.png" }) {
//             childImageSharp {
//                 fluid(maxWidth: 400, maxHeight: 250) {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `

export default Header;
