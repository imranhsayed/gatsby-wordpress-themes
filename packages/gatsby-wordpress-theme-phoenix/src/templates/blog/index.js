import React from 'react';

import Layout from "../../components/layout";
import Blog from '../../components/blog-list/blog';
import SEO from "../../components/seo";

const BlogTemplate = ( { pageContext } ) => {
	return (
		<Layout>
			{/* @TODO seo to be added later. */}
			<SEO title="Phoenix: Gatsby WordPress Theme" seo={{}}/>
			<Blog pageContext={ pageContext } pageTitle="Blog" />
		</Layout>
	)
}
export default BlogTemplate
