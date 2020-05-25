import React from 'react';
import Link from 'gatsby-link';

import Post from '../post';

const Blog = ( { pageContext } ) => {

	const { group, index, first, last, pageCount } = pageContext;
	const previousUrl = index - 1 == 1 ? '/blog' : '/blog/' + ( index - 1 ).toString()
	const nextUrl = '/blog/' + ( index + 1 ).toString();

	return (
		<div className="blog">
			<h1>Blog</h1>
			{ group.map( ( { node } ) => (
				<Post key={ node.id } post={ node } />
			) ) }

			<div className="blog__page-navigation">
				{ ! first ? <Link to={ previousUrl }>Previous Page</Link> : '' }
				{ ! last ? <Link to={ nextUrl }>Next Page</Link> : '' }
			</div>
		</div>
	)
}
export default Blog
