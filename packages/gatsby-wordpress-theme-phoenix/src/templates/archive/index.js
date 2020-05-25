import React from 'react';

import Layout from "../../components/layout";
// import Blog from '../../components/blog-list/blog';

const ArchiveTemplate = ( { pageContext } ) => {

	console.warn( 'pageContext', pageContext );

	return (
		<Layout>
			Hello
			{/*<Archive pageContext={ pageContext }/>*/}
		</Layout>
	)
}
export default ArchiveTemplate
