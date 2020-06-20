import React from 'react';
import { isEmpty } from 'lodash';
import { getFormattedDate } from '../../../utils/functions';
import Link from 'gatsby-link';
import './style.scss';
import defaultImage from '../../../images/default/default.jpg';
import Img from 'gatsby-image';

const Post = ( { post } ) => {

	console.warn( 'post', post );

	if ( isEmpty( post ) ) {
		return null;
	}

	return (
		<div className="featured-post-section" >
			{ ! isEmpty( post.featuredImage ) ? (
				<div className="featured-post-section__img">
					<Img fluid={post.featuredImage.sourceUrlSharp.childImageSharp.fluid} alt={ post.altText ? post.altText : post.title } />
				</div>
			) : (
				<div className="featured-post-section__img">
					<img src={ defaultImage } alt="Post default"/>
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
