import React from 'react';

import Layout from "../../components/layout";
import Blog from '../../components/blog-list/blog';

const ArchiveTemplate = ( { pageContext } ) => {

	return (
		<Layout>
			<Blog pageContext={ pageContext } pageTitle={ pageContext.node.name }/>
		</Layout>
	)
}
export default ArchiveTemplate
