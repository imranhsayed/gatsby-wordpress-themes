import React from 'react';
import Link from 'gatsby-link';

import Post from '../post';
import './style.scss';

const Blog = ( { pageContext, pageTitle } ) => {

	const { group, index, first, last, pageCount, pathPrefix } = pageContext;
	const previousUrl = index - 1 == 1 ? `/${ pathPrefix }` : `/${ pathPrefix }/` + ( index - 1 ).toString()
	const nextUrl = `/${ pathPrefix }/` + ( index + 1 ).toString();

	return (
		<div className="blog wrapper">
			<h1>{ pageTitle }</h1>
			{ group.map( ( { node } ) => (
				<Post key={ node.id } post={ node } />
			) ) }

			<div className="blog__page-navigation">
				{ ! first ? <Link to={ previousUrl }>≪ Previous Page</Link> : '' }
				{ ! last ? <Link to={ nextUrl }>Next Page ≫</Link> : '' }
			</div>
		</div>
	)
}
export default Blog
