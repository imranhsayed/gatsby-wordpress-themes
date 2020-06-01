
import React from 'react';
import Layout from '../../components/layout';
import Single from '../../components/single';

const Post = ( props ) => {

	const { pageContext } = props;

	return (
		<Layout>
			<Single data={ pageContext }/>
		</Layout>
	)
};

export default Post;
