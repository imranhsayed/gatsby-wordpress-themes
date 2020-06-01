import Taxonomies from "../widgets/taxonomies";
import React from "react";
import { isEmpty } from 'lodash';
import './style.scss';

const Single = ( { data } ) => {

	if ( isEmpty( data ) ) {
		return null;
	}

	const { id, postId, title, content, featuredImage, categories } = data;

	return (
		<div className="post-container wrapper">
			<div className="entry-header">
				<h1 className="entry-title" dangerouslySetInnerHTML={{ __html: title }} />
			</div>
			<div className="post-content-wrap">
				<article
					data-id={id}
					id={`post-${postId}`}
					className={`post-${postId} post-content`}
				>

					{/* Featured Image */}
					{ ( undefined !== featuredImage && null !== featuredImage ) ? <img src={ featuredImage.sourceUrl } srcSet={ featuredImage.srcSet } alt={ featuredImage.altText }/>  : '' }

					<div
						className="entry-content"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
					{/* .entry-content */}
				</article>
				<aside className="aside">
					{/* Taxonomy Widget */}
					<Taxonomies taxonomies={ categories }/>
				</aside>
			</div>
		</div>
	)
};

export default Single;
