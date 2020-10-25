
import React from 'react';
import Layout from '../../components/layout';
import Single from '../../components/single';
import SEO from "../../components/seo";
import { Helmet } from "react-helmet";
import {getElementorCssLinksData, getElementorJsLinksData} from "../../utils/elementor";

const Post = ( props ) => {

	const { pageContext } = props;
	const postId = pageContext?.databaseId;
	const elementorCssLinksData = getElementorCssLinksData(postId);
	const elementorJsLinksData = getElementorJsLinksData(postId);
	const hasElementorSupport = 'false' !== process.env.GATSBY_ELEMENTOR_SUPPORT;

	return (
		<>
		<Layout>
			<SEO title="Phoenix: Gatsby WordPress Theme" seo={pageContext?.seo} uri={pageContext?.uri}/>
			<Helmet>
				{
					hasElementorSupport && elementorCssLinksData.length && elementorCssLinksData.map( linkData => (
						<link key={linkData?.id} rel='stylesheet' id={linkData?.id} href={linkData?.link} media='all' />
					) )
				}
			</Helmet>
			<Single data={ pageContext }/>
		</Layout>
			{/*{*/}
			{/*	hasElementorSupport && elementorJsLinksData.length && elementorJsLinksData.map( linkData => (*/}
			{/*		<script key={linkData?.id} id={linkData?.id} src={linkData?.src} />*/}
			{/*	) )*/}
			{/*}*/}
			{/*<script src='https://codeytek.com/headless-cms/wp-includes/js/jquery/ui/position.min.js?ver=1.11.4' id='jquery-ui-position-js'/>*/}
			{/*<script src='https://codeytek.com/headless-cms/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp' id='jquery-core-js'/>*/}
		</>
	)
};

export default Post;
