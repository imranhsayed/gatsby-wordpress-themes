import React from 'react';
import config from '../../../../client-config';
import { graphql, Link, useStaticQuery } from "gatsby";
import { isEmpty } from 'lodash';
import './style.scss';
import '../../../images/home/mountain-illustration.png';
import Img from "gatsby-image";

const Hero = ( props ) => {

	const { title, description, image, pageLinkText, pageLink } = props.data;

	const imgData = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "home/mountain-illustration.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
	`);

	return ! isEmpty( props.data ) ? (
		<div className="hero-section wrapper">
			<div className="hero-left">
				{ title ? (
					<h2>{ title }</h2>
				) : (
					<h2>{ config.heroSection.heroTitle }</h2>
				) }
				{ description ? (
					<p className="hero-section__description">
						{ description }
					</p>
				) : (
					<p>{ config.heroSection.heroDescription }</p>
				) }
				{ isEmpty( pageLink ) ? (
					<Link to="/blog/">
						<button className="button-secondary">{ pageLinkText }</button>
					</Link>
				) : (
					<Link to={ ! isEmpty ( pageLink.uri ) ? pageLink.uri : '/blog/'  }>
						<button className="button-secondary">{ pageLinkText }</button>
					</Link>
				) }
			</div>
			<div className="hero-right">
				{ ! isEmpty( image ) ? (
					<Img fluid={ image.sourceUrlSharp.childImageSharp.fluid } alt={ image.altText ? image.altText : 'Banner' } />
				) : (
					<Img fluid={ imgData.file.childImageSharp.fluid } alt="Hero" />
				) }
			</div>
		</div>
	) : (
		''
	);
};

export default Hero;
