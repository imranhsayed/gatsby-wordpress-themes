/**
 * External dependencies.
 */
import React from 'react';
import { useEffect, useState } from 'react';
import  Link from 'gatsby-link';
import { each, isEmpty } from 'lodash';
import classnames from 'classnames';

import DropdownIcon from '../icons/dropdown-icon';
import { normalizePath } from "../../utils/functions";

const Nav = ( props ) => {
	const { headerMenuItems } = props;

	const [ menuVisible, setMenuVisibility ] = useState( false );
	const [ menuState, setMenuState ] = useState( {} );

	// Eslint disable as headerMenuItems is available from the props so does not have a missing dependency.
	/* eslint-disable */
	useEffect( () => {

		if ( Object.keys( headerMenuItems.edges ).length ) {
			const newMenuState = {};

			each( headerMenuItems.edges, ( item ) => {
				newMenuState[ item.node.menuItemId ] = { isOpen: false };
			} );

			setMenuState( newMenuState );
		}

	}, [] );
	/* eslint-enable */

	const handleSubMenuOpen = ( event, parentMenuId ) => {
		event.stopPropagation();

		setMenuState( {
			...menuState,
			[ parentMenuId ]: { isOpen: ! menuState[ parentMenuId ].isOpen },
		} );
	};

	const menuButtonClasses = classnames(
		'header-nav-menu-btn hamburger header-nav__menu-btn hamburger--slider',
		{
			'is-active': menuVisible
		}
	);

	const toggleMenu = () => {
		setMenuVisibility( ! menuVisible );
		document.body.classList.toggle( 'mobile-menu-open' );
	};

	return (
		<>
			<nav
				className={ `header-nav ${
					menuVisible ? 'menu-visible' : ''
				}` }
			>
				<div className="header-nav__wrap">
					{ ! isEmpty( headerMenuItems.edges ) && ! isEmpty( menuState ) ? (
						<ul className="header-nav__wrap">
							{ headerMenuItems.edges.map( ( menu ) => {
								const hasChildren = null !== menu.node.childItems.edges ? menu.node.childItems.edges.length: false;
								const parentMenuLink = (
									<Link
										className="header-nav__menu-link"
										to={ normalizePath( menu.node.url ) }
									>
										{ menu.node.label }
									</Link>
								);

								return (
									<li
										key={ menu.node.menuItemId }
										className={ `header-nav__menu-item ${
											hasChildren
												? 'menu-has-children'
												: ''
										} ${
											menuState[ menu.node.menuItemId ].isOpen
												? 'child-menu-open'
												: ''
										}` }
									>
										{ hasChildren ? (
											<span className="header-nav__menu-link-container-with-arrow">
												{ parentMenuLink }
												<button
													className="header-nav__toggle-menu-btn icon-button"
													onClick={ ( event ) => handleSubMenuOpen( event, menu.node.menuItemId ) }
													onKeyDown={ ( event ) => handleSubMenuOpen( event, menu.node.menuItemId ) }
												>
												<DropdownIcon />
												</button>
											</span>
										) : parentMenuLink }

										{ /* Child Menu */ }
										{ hasChildren ? (
											<ul
												className={ `header-nav__submenu ${
													menuState[ menu.node.menuItemId ].isOpen
														? 'child-menu-open'
														: ''
												}` }
											>
												{ menu.node.childItems.edges.map(
													( subMenu ) => (
														<li
															className="header-nav__submenu-item"
															key={ subMenu.node.menuItemId }
														>
															<Link
																className="header-nav__submenu-link"
																to={ normalizePath( subMenu.node.url ) }
															>
																{ subMenu.node.label }
															</Link>
														</li>
													)
												) }
											</ul>
										) : null }
									</li>
								);
							} ) }
						</ul>
					) : null }

				</div>
			</nav>

			{/*Burger menu*/}
			<button
				className={ menuButtonClasses }
				type="button"
				onClick={ toggleMenu }
				onKeyDown={ toggleMenu }
			>
				<span className="hamburger-box">
					<span className="hamburger-inner">
						<span className="screen-reader-text">Toogle Menu</span>
					</span>
				</span>
			</button>
		</>
	);
};

export default Nav;
