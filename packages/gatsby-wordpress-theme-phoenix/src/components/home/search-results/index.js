import React from 'react';
import { isEmpty } from 'lodash';
import Link from 'gatsby-link';
import { sanitize } from "../../../utils/functions";

const SearchResults = ( { queryResults } ) => {

	if ( isEmpty( queryResults ) ) {
		return null;
	}

	return (
		<ul className="search-results">
			{ queryResults.map( post => (
				<li key={ post.id }>
					<Link to={ post.uri }><span dangerouslySetInnerHTML={{ __html: sanitize(post.title) }}/></Link>
				</li>
			) ) }
		</ul>
	);
};

export default SearchResults;
