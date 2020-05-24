import React from 'react';
import config from '../../../../client-config';
import { Link } from "gatsby";
import { isEmpty } from 'lodash';
import './style.scss';
// import '../../../images/home/mountain-illustration.png';

const Hero = ( props ) => {

	const { title, description, image: { sourceUrl, altText }, pageLinkText, pageLink: { uri } } = props.data;

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
				{ pageLinkText ? (
					<Link to="/blog">
						<button>{ pageLinkText }</button>
					</Link>
				) : (
					<Link to={ uri  }>
						<button>{ pageLinkText }</button>
					</Link>
				) }
			</div>
			<div className="hero-right">
				{ sourceUrl ? (
					<img src={ sourceUrl } alt={ altText } />
				) : (
					<img src={ config.heroSection.heroImgURL } alt="hero" />
				) }
			</div>
		</div>
	) : (
		''
	);
};

export default Hero;
