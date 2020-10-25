import Taxonomies from "../widgets/taxonomies";
import React from "react";
import { isEmpty } from 'lodash';
import './style.scss';
import Img from 'gatsby-image';
import { sanitize } from "../../utils/functions";

const Single = ( { data } ) => {

	if ( isEmpty( data ) ) {
		return null;
	}

	const { id, postId, title, content, featuredImage, categories } = data;
	const showSidebar = 'false' !== process.env.GATSBY_SIDEBAR;

	return (
		<div className="post-container wrapper">
			<div className="entry-header">
				<h1 className="entry-title" dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
			</div>
			<div className={`post-content-wrap ${showSidebar ? 'has-sidebar' : '' }`}>
				<article
					data-id={id}
					id={`post-${postId}`}
					className={`post-${postId} post-content`}
				>

					{/* Featured Image */}
					{ ( undefined !== featuredImage && null !== featuredImage ) ? <Img fluid={featuredImage.sourceUrlSharp.childImageSharp.fluid} alt={ featuredImage.altText } />  : null }

					<div
						className="entry-content"
						dangerouslySetInnerHTML={{ __html: sanitize(content) }}
					/>
					{/* .entry-content */}
				</article>
				{
					showSidebar ? (
						<aside className="aside">
							{/* Taxonomy Widget */}
							<Taxonomies taxonomies={ categories }/>
						</aside>
					): null
				}
			</div>
		</div>
	)
};

export default Single;
