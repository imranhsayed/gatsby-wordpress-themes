import React from 'react';
import Link from 'gatsby-link'

import Layout from "../../components/layout";
import Blog from '../../components/blog-list/blog';

const BlogTemplate = ( { pageContext } ) => {

	return (
		<Layout>
			<Blog pageContext={ pageContext }/>
		</Layout>
	)
}
export default BlogTemplate
