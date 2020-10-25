import React from 'react';
import Layout from '../../components/layout';
import Single from '../../components/single';
import SEO from "../../components/seo";
import { Helmet } from "react-helmet";
import {getElementorCssLinksData} from "../../utils/elementor";
import BodyClassName from "react-body-classname";

const Post = ( props ) => {

	const { pageContext } = props;
	const postId = pageContext?.databaseId;
	const elementorCssLinksData = getElementorCssLinksData(postId);
	const hasElementorSupport = 'false' !== process.env.GATSBY_ELEMENTOR_SUPPORT;

	return (
		<Layout>
			<SEO title="Phoenix: Gatsby WordPress Theme" seo={pageContext?.seo} uri={pageContext?.uri}/>
			<Helmet>
				{
					hasElementorSupport && elementorCssLinksData.length && elementorCssLinksData.map( linkData => (
						<link key={linkData?.id} rel='stylesheet' id={linkData?.id} href={linkData?.link} media='all' />
					) )
				}
			</Helmet>
			<BodyClassName className={pageContext?.bodyClasses}/>
			<Single data={ pageContext }/>
		</Layout>
	)
};

export default Post;
