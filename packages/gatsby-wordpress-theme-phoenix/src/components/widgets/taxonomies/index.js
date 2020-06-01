import React from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'gatsby';
import './style.scss';

const Taxonomies = ( { taxonomies } ) => {

	if ( isEmpty( taxonomies ) ) {
		return null;
	}

	return (
		<div className="taxonomies-widget">
			<h2>Categories</h2>
			<ul className="taxonomies-widget-lists">
				{ taxonomies.map( term => (
					<li key={ term.node.id } className="taxonomies-widget-list">
						<Link to={ term.node.uri } className="taxonomies-widget-link">{ term.node.name }</Link>
					</li>
				) ) }
			</ul>
		</div>
	);
};

export default Taxonomies;
