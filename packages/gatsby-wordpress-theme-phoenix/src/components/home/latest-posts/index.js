import React from 'react';
import { isEmpty } from 'lodash';
import config from '../../../../client-config';
import './style.scss';

const LatestPosts = ( props ) => {

	const { data } = props;

	return ! isEmpty( data ) ? (
		<div className="latest-posts-section">
			<div className="wrapper">
				<h2>{ ! isEmpty( config.latestPostHeading ) ? config.latestPostHeading : 'Latest Posts'  }</h2>

				{ ! isEmpty( data ) ? (
					<div className="latest-posts-section__wrap">
						{ data.map(
							( post, index ) => (
								<div
									key={ post.id }
									className="latest-post-section"
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
										<div className="latest-post-section__img">
											<img
												src={ config.defaultPostImage }
												alt="default"
											/>
										</div>
									) }
									<div className="latest-post-section__content">
										{ post.excerpt ? (
											<p className="latest-post-section__title" dangerouslySetInnerHTML={ { __html: post.excerpt } }/>
										) : (
											''
										) }
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

export default LatestPosts;
