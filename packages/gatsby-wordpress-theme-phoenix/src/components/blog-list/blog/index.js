import React from 'react';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';

import Post from '../post';
import './style.scss';

const Blog = ( { pageContext, pageTitle } ) => {

	const { group, index, first, last, pathPrefix } = pageContext;

	if ( isEmpty( group ) ) {
		return null;
	}

	const previousUrl = 1 === index - 1 ? `/${ pathPrefix }` : `/${ pathPrefix }/` + ( index - 1 ).toString()
	const nextUrl = `/${ pathPrefix }/` + ( index + 1 ).toString();

	return (
		<div className="blog wrapper">
			<h1>{ pageTitle }</h1>
			{ group.map( ( { node } ) => (
				<Post key={ node.id } post={ node } />
			) ) }

			<div className="blog__page-navigation">
				{ ! first ? <Link to={ previousUrl }>≪ Previous Page</Link> : null }
				{ ! last ? <Link to={ nextUrl }>Next Page ≫</Link> : null }
			</div>
		</div>
	)
}
export default Blog
