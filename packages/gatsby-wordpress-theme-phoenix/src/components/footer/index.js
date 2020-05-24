/**
 * External dependencies.
 */
import PropTypes from 'prop-types';
import React from 'react';
import { graphql, Link, StaticQuery } from "gatsby";

/**
 * Internal dependencies.
 */
import FacebookIcon from '../icons/facebook-icon';
import TwitterIcon from '../icons/twitter-icon';
import './style.scss';
import { normalizePath } from "../../utils/functions";
import InstagramIcon from "../icons/instagram-icon";
import YouTubeIcon from "../icons/youtube-icon";

const Footer = ( { data } ) => {
	const { footer: { copyrightText, socialLinks, sidebarOne, sidebarTwo }, footerMenuItems } = data.HWGraphQL;

	const staticSocialLink = [
		{ iconName: 'facebook', iconUrl: 'https://facebook.com/codeytek'  },
		{ iconName: 'twitter', iconUrl: 'https://twitter.com/codeytek'  },
		{ iconName: 'instagram', iconUrl: 'https://www.instagram.com/codeytek_academy'  },
		{ iconName: 'youtube', iconUrl: 'https://youtube.com/ImranSayedDev'  },
	];

	const socialLinksData = socialLinks.length ? socialLinks : staticSocialLink;

	const socialIcons = {
		facebook: <FacebookIcon />,
		twitter: <TwitterIcon />,
	};

	console.warn( 'footer', data );

	return (
		<footer className="footer">

			<div className="wrapper">
				{/*Top section*/}
				<div className="footer__top">
					{ sidebarOne ? <div  dangerouslySetInnerHTML={ { __html: sidebarOne } } className="footer__sidebar-one footer-widget"/> : '' }
					{ sidebarTwo ? <div  dangerouslySetInnerHTML={ { __html: sidebarTwo } } className="footer__sidebar-two footer-widget"/> : '' }

					{
						footerMenuItems.edges.length ? (
							<div className="footer-menu-items footer-widget">
								<h6>About the site</h6>
								<ul>
									{ footerMenuItems.edges.map( menu  => (
										<li key={ menu.node.menuItemId }>
											<Link
												className="header-nav__menu-link"
												to={ normalizePath( menu.node.url )  }
											>
												<span> > </span>
												{ menu.node.label }
											</Link>
										</li>
									)) }
								</ul>
							</div>
						) : ''
					}
				</div>

				{/*	Bottom section*/}
				<div className="footer__bottom">
					{ copyrightText ? <div className="copyright-text">{ copyrightText }</div> : <div className="copyright-text">Codeytek Academy 2020</div> }
					{
						socialLinksData.length ?
							<ul className="social-links">
								{ socialLinksData.map( socialLink => (
									<li key={ socialLink.iconName }>
										<a href={ socialLink.iconUrl } target="_blank">
											{ 'facebook' === socialLink.iconName ? <FacebookIcon/> : '' }
											{ 'twitter' === socialLink.iconName ? <TwitterIcon/> : '' }
											{ 'instagram' === socialLink.iconName ? <InstagramIcon/> : '' }
											{ 'youtube' === socialLink.iconName ? <YouTubeIcon/> : '' }
										</a>
									</li>
								) ) }
							</ul> :
							''
					}
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	copyrightText: PropTypes.string,
};

Footer.defaultProps = {
	copyrightText: `Codeytek Academy ${ new Date().getFullYear() }`,
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export {
	Footer
};

/**
 * This is default Component Export.
 *
 * @return {*}
 */
export default () => {

	return (
		<StaticQuery
			query={ graphql`
				    query FooterQuery {
				        HWGraphQL {
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
				` }
			render={ data => <Footer data={ data }/> }
		/>
	)
}
