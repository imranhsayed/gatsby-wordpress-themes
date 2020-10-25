
import React from 'react';

/* eslint-disable */
import Img from 'gatsby-image';
/* eslint-enable */

import { useStaticQuery, graphql } from "gatsby";
import { isEmpty } from 'lodash';
import './style.scss';
import Taxonomies from "../widgets/taxonomies";
import { sanitize } from "../../utils/functions";

const Page = ( props ) => {

	const { data } = props;
	const showSidebar = 'false' !== process.env.GATSBY_SIDEBAR;

	/* eslint-disable */
	const imgData = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "default/default.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
	`);
	/* eslint-enable */

	return (
		<>
			{ ! isEmpty( data )  ? (
				<div className="page-container wrapper">
					{ ! isEmpty( data.title )  ? (
						<h2 dangerouslySetInnerHTML={{__html: sanitize( data?.title )}}/>
					) : null }
					<div className={`page-content-wrap ${showSidebar ? 'has-sidebar' : '' }`}>
						<section className="page-content">
							{/* Uncomment this if you need featured image to be displayed here*/}
							{ ! isEmpty( data.featuredImage ) ? (
								<Img fluid={data.featuredImage.sourceUrlSharp.childImageSharp.fluid} alt={ data.altText ? data.altText : data.title } />
							) : null }

							{ ! isEmpty( data.content ) ? (
								<div
									dangerouslySetInnerHTML={ {
										__html: data.content,
									} }
								/>
							) : null }
						</section>
						{ showSidebar ? (
							<aside className="aside">
								{/* Taxonomy Widget */}
								<Taxonomies taxonomies={ data.categories }/>
							</aside>
						) : null }
					</div>
				</div>
			) : (
				'Loading...'
			) }
		</>
	);
};

export default Page;
