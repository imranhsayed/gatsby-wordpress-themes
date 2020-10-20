import React from 'react';

import Layout from "../../components/layout";
import Blog from '../../components/blog-list/blog';
import SEO from "../../components/seo";

const ArchiveTemplate = ( { pageContext } ) => {

	return (
		<Layout>
			<SEO title="Phoenix: Gatsby WordPress Theme" seo={pageContext?.node?.seo} uri={pageContext?.node?.uri}/>
			<Blog pageContext={ pageContext } pageTitle={ pageContext.node.name }/>
		</Layout>
	)
}
export default ArchiveTemplate
