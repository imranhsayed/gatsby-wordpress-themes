import React from 'react';
import { isEmpty } from 'lodash';
import config from '../../../../client-config';
import { getFormattedDate } from '../../../utils/functions';
import { Link } from 'gatsby';
import './style.scss';

const Post = ( { post } ) => {

	if ( isEmpty( post ) ) {
		return null;
	}

	return (
		<div className="featured-post-section" >
			{ ! isEmpty( post.featuredImage ) ? (
				<div className="featured-post-section__img">
					<img
						src={
							post.featuredImage.sourceUrl
						}
						srcSet={
							post.featuredImage.sourceUrl.srcSet
						}
						alt={ post.title }
					/>
				</div>
			) : (
				<div className="featured-post-section__img">
					<img
						src={ config.defaultPostImage }
						alt={ post.title }
					/>
				</div>
			) }
			<div className="featured-post-section__content">
				{ post.title ? (
					<h3 dangerouslySetInnerHTML={ { __html: post.title } } />
				) : (
					''
				) }
				{ post.excerpt ? (
					<div className="featured-post-section__excerpt" dangerouslySetInnerHTML={ { __html: post.excerpt } }/>
				) : (
					''
				) }
				<div className="featured-post-section__meta">
					{ post.date ? (
						<span className="featured-post-section__date">
													{ getFormattedDate( post.date ) }
												</span>
					) : (
						''
					) }
					<Link
						className="featured-post-section__read-more"
						to={ post.uri }
					>
						Read More
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Post;
