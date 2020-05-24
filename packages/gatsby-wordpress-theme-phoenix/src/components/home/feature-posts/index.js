import React from 'react';
import config from '../../../../client-config';
import { Link } from 'gatsby';
import { isEmpty } from 'lodash';
import { getFormattedDate } from '../../../utils/functions';
import './style.scss';
// import '../../../images/default/default.jpg';

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
								<div
									key={ `${ post.id }` }
									className="featured-post-section"
								>
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
											<p className="featured-post-section__content-paragraph" dangerouslySetInnerHTML={ { __html: post.excerpt } }/>
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
						) }
					</div>
				) : (
					''
				) }
			</div>
		</div>
	) : (
		''
	);
};

export default FeaturedPosts;
