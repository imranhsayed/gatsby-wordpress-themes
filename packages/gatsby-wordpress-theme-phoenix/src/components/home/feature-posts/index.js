import React from 'react';
import config from '../../../../client-config';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';
import Post from '../../blog-list/post';
import './style.scss';

const FeaturedPosts = ( props ) => {

	const { featuredPosts, heading } = props.data;

	return ! isEmpty ( featuredPosts ) ? (
		<div className="featured-posts-section">
			<div className="wrapper">
				<h2>
					{ ! isEmpty( heading )
						? heading
						: config.featuredPostHeading }
				</h2>
				{ ! isEmpty( featuredPosts ) ? (
					<div className="featured-posts-section__wrap">
						{ featuredPosts.map(
							( post, index ) => (
								<Post key={ `${ post.id }` } post={ post } />
							)
						) }
					</div>
				) : null }
			</div>
			<div className="view-all-wrap">
				<Link to="/blog"><button>View All</button></Link>
			</div>
		</div>
	) : (
		''
	);
};

export default FeaturedPosts;
