
import React from 'react';

/* eslint-disable */
import Img from 'gatsby-image';
/* eslint-enable */

import { useStaticQuery, graphql } from "gatsby";
import { isEmpty } from 'lodash';
import './style.scss';
import Taxonomies from "../widgets/taxonomies";

const Page = ( props ) => {

	const { data } = props;

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
						<h2>{ data.title }</h2>
					) : null }
					<div className="page-content-wrap">
						<section className="page-content">
							{/* Uncomment this if you need featured image to be displayed here*/}
							{ ! isEmpty( data.featuredImage ) ? (
								<Img fluid={data.featuredImage.sourceUrlSharp.childImageSharp.fluid} alt={ data.altText ? data.altText : data.title } />
							) : (
								<Img fluid={imgData.file.childImageSharp.fluid} alt="Default" />
							) }

							{ ! isEmpty( data.content ) ? (
								<div
									dangerouslySetInnerHTML={ {
										__html: data.content,
									} }
								/>
							) : null }
						</section>
						<aside className="aside">
							{/* Taxonomy Widget */}
							<Taxonomies taxonomies={ data.categories }/>
						</aside>
					</div>
				</div>
			) : (
				'Loading...'
			) }
		</>
	);
};

export default Page;
