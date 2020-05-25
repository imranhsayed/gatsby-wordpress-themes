import Layout from "../../components/layout";


import React from 'react';
import Link from 'gatsby-link'

const NavLink = props => {
	if (!props.test) {
		return <Link to={props.url}>{props.text}</Link>
	} else {
		return <span>{props.text}</span>
	}
}

const BlogTemplate = ({ pageContext }) => {
	const { group, index, first, last, pageCount } = pageContext
	const previousUrl = index - 1 == 1 ? '/blog' : '/blog/' + (index - 1).toString()
	const nextUrl = '/blog/' + (index + 1).toString();

	console.warn( `index-${index}, first- ${ first }, last-${ last }, pageCount-${ pageCount }`  );
	console.warn( `prevURL- ${ previousUrl }, nextURL- ${ nextUrl }` );

	return (
		<Layout>
			<h4>{pageCount} Pages</h4>

			{group.map(({ node }) => (
				<div key={node.id} className="blogListing">
					<Link className="blogUrl" to={`${ node.slug }`}>
						{node.title}
					</Link>
				</div>
			))}
			<div className="previousLink">
				<NavLink test={first} url={previousUrl} text="Go to Previous Page" />
			</div>
			{ index < pageCount ? (
				<div className="nextLink">
					<NavLink test={last} url={ nextUrl } text="Go to Next Page" />
				</div>
			) : '' }

		</Layout>
	)
}
export default BlogTemplate
