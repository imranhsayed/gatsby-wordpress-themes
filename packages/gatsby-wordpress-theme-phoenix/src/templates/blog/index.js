import React from 'react';

import Layout from "../../components/layout";
import Blog from '../../components/blog-list/blog';

const BlogTemplate = ( { pageContext } ) => {

	return (
		<Layout>
			<Blog pageContext={ pageContext } pageTitle="Blog" />
		</Layout>
	)
}
export default BlogTemplate
