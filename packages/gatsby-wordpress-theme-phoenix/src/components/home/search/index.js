import React from 'react';
import config from '../../../../client-config';
import { Link } from 'gatsby';
import { isEmpty } from 'lodash';
// import '../../../images/home/search-background.png';

const Search = ( props ) => {
	const {
		backgroundImage,
		      searchLabel,
		      taxonomies,
		      taxonomyIconOne,
		      taxonomyIconTwo,
		      taxonomyIconThree,
	} = props.data;

	const taxonomyIcons = [ taxonomyIconOne, taxonomyIconTwo, taxonomyIconThree ];

	console.warn( 'propsss', ! isEmpty( props.data ) );

	const backgroundURL = ! isEmpty( backgroundImage )
		? backgroundImage.sourceUrl
		: config.searchSection.searchBackURL;
	const placeholderText = ! isEmpty ( searchLabel )
		? searchLabel
		: config.searchSection.searchPlaceholderTxt;

	return ! isEmpty( props.data ) ? (
		<div
			className="search-section"
			style={ {
				background: `url( ${ backgroundURL } )`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			} }
		>
			<form>
				<input type="search" placeholder={ placeholderText } />
			</form>
			{ ! isEmpty( taxonomies ) ? (
				<div className="search-section__categories">
					{ taxonomies.map( ( term, index ) => (
						<div
							key={ term.id }
							className="search-section__category"
						>
							{ ! isEmpty( taxonomyIcons[index].sourceUrl ) ? (
								<div className="search-section__category-icon">
									<img
										src={ taxonomyIcons[index].sourceUrl }
										alt={ taxonomyIcons[index].altText }
									/>
								</div>
							) : (
								<div className="search-section__category-icon">
									<img
										src={
											config.searchSection.images[ index ]
										}
										alt="category icon"
									/>
								</div>
							) }
							{ term.name ? (
								<Link to={ term.uri }>
									{ term.name }
								</Link>
							) : (
								''
							) }
						</div>
					) ) }
				</div>
			) : (
				''
			) }
		</div>
	) : (
		''
	);
};

export default Search;
