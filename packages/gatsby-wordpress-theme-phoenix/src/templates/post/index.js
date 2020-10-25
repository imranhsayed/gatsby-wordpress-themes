
import React from 'react';
import Layout from '../../components/layout';
import Single from '../../components/single';
import SEO from "../../components/seo";
import { Helmet } from "react-helmet";
import {singlePostElementorCssLink} from "../../utils/elementor";

const Post = ( props ) => {

	const { pageContext } = props;
	const postId = pageContext?.databaseId;

	return (
		<Layout>
			<SEO title="Phoenix: Gatsby WordPress Theme" seo={pageContext?.seo} uri={pageContext?.uri}/>
			<Helmet>
				<link rel='stylesheet' id='elementor-post-521-css' href={singlePostElementorCssLink(postId)} media='all' />
			</Helmet>
			<Single data={ pageContext }/>
		</Layout>
	)
};

export default Post;
