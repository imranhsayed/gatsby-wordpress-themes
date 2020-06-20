import React from 'react';
import { isEmpty } from 'lodash';
import Link from 'gatsby-link';

const SearchResults = ( { queryResults } ) => {

	if ( isEmpty( queryResults ) ) {
		return null;
	}

	return (
		<ul className="search-results">
			{ queryResults.map( post => (
				<li key={ post.id }>
					<Link to={ post.uri }><span dangerouslySetInnerHTML={{ __html: post.title }}/></Link>
				</li>
			) ) }
		</ul>
	);
};

export default SearchResults;
