
import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
import { isEmpty } from 'lodash';

const Page = ( props ) => {

	const { data } = props;

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

	return (
		<>
			{ ! isEmpty( data )  ? (
				<>
					<section className="page-content wrapper">
						{ ! isEmpty( data.title )  ? (
							<h2>{ data.title }</h2>
						) : (
							''
						) }
						{ ! isEmpty( data.featuredImage ) ? (
							<Img fluid={data.sourceUrlSharp.childImageSharp.fluid} alt={ data.altText ? data.altText : data.title } />
						) : (
							<Img fluid={imgData.file.childImageSharp.fluid} alt="Default" />
						) }
						{ ! isEmpty( data.content ) ? (
							<div
								dangerouslySetInnerHTML={ {
									__html: data.content,
								} }
							/>
						) : (
							''
						) }
					</section>
					<aside className="aside"></aside>
				</>
			) : (
				'Loading...'
			) }
		</>
	);
};

export default Page;
