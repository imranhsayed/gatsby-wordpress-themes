import React from 'react';
import Link from 'gatsby-link'

import Layout from "../../components/layout";
import Post from '../../components/blog-list/post';

const NavLink = props => {
	if ( ! props.test ) {
		return <Link to={ props.url }>{ props.text }</Link>
	} else {
		return <span>{ props.text }</span>
	}
}

const BlogTemplate = ( { pageContext } ) => {

	const { group, index, first, last, pageCount } = pageContext
	const previousUrl = index - 1 == 1 ? '/blog' : '/blog/' + ( index - 1 ).toString()
	const nextUrl = '/blog/' + ( index + 1 ).toString();

	return (
		<Layout>
			<h4>{ pageCount } Pages</h4>

			{ group.map( ( { node } ) => (
				<Post key={ node.id } post={ node } />
			) ) }
			<div className="previousLink">
				<NavLink test={ first } url={ previousUrl } text="Go to Previous Page"/>
			</div>
			{ index < pageCount ? (
				<div className="nextLink">
					<NavLink test={ last } url={ nextUrl } text="Go to Next Page"/>
				</div>
			) : '' }

		</Layout>
	)
}
export default BlogTemplate
