
import React from 'react';
import Layout from '../../components/layout';
import Single from '../../components/single';
import SEO from "../../components/seo";

const Post = ( props ) => {

	const { pageContext } = props;

	return (
		<Layout>
			<SEO title="Phoenix: Gatsby WordPress Theme" seo={pageContext?.seo} uri={pageContext?.uri}/>
			<Single data={ pageContext }/>
		</Layout>
	)
};

export default Post;
