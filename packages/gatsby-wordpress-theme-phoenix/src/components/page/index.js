
import React from 'react';
import config from '../../../client-config';
import { isEmpty } from 'lodash';
// import './../../../images/default/default.jpg';

const Page = ( props ) => {

	const { data } = props;

	return (
		<>
			{ ! isEmpty( data )  ? (
				<>
					<section className="page-content">
						{ ! isEmpty( data.title )  ? (
							<h2>{ data.title }</h2>
						) : (
							''
						) }
						{ ! isEmpty( data.featuredImage ) ? (
							<img
								src={ data.featuredImage.sourceUrl }
								alt={ data.featuredImage.altText }
							/>
						) : (
							<img
								src={ config.defaultPostImage }
								alt={ data.title }
							/>
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
