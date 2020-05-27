import React, { useState } from "react"
import { Link, graphql } from "gatsby"

const Writing = props => {
	const { data } = props
	const posts    = data.HWGraphQL.posts.edges;
	console.warn( 'data', posts );

	const emptyQuery = '';
	const [ state, setState ] = useState( {
		filteredData: [],
		query: emptyQuery,
	} );

	// return 'hithere';

	const handleInputChange = () => {

	};

	return (
		<>
			{/* in my site I wrap each page with a Layout and SEO component which have
    been omitted here for clarity and replaced with a React.fragment --> */ }

			{/*in-line css for demo purposes*/ }
			<h1 style={ { textAlign: `center` } }>Writing</h1>

			<input
				type="text"
				aria-label="Search"
				placeholder="Type to filter posts..."
				onChange={ handleInputChange }
			/>

			{ posts.map( ( post ) => {

				const { title, date, content, excerpt, slug } = post.node;

				return (
					<article key={ slug }>
						<header>
							<h2>
								<Link to={ slug }>{ title }</Link>
							</h2>

							<p>{ date }</p>
						</header>
						<section>
							<p
								dangerouslySetInnerHTML={ {
									__html: content || excerpt,
								} }
							/>
						</section>
						<hr/>
					</article>
				)
			} ) }
		</>
	)
}

export default Writing

export const pageQuery = graphql`
    query {
        HWGraphQL {
            posts( first: 5000 ) {
                edges {
                    node {
                        id
                        title
                        excerpt
                        content
                        date
                        uri
                        slug
                    }
                }
            }
        }
    }
`
