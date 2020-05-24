import React from "react";
import Layout from "../../components/layout";
import Page from '../../components/page';

const PageTemplate = ( props ) => {

	return (
		<Layout>
			<Page data={ props.pageContext }/>
		</Layout>
	)
};
export default PageTemplate;
