import React from "react";
import Layout from "../../components/layout";
import Page from '../../components/page';
import SEO from "../../components/seo";

const PageTemplate = ( props ) => {

	return (
		<Layout>
			<SEO title="Phoenix: Gatsby WordPress Theme" seo={props?.pageContext?.page?.seo} uri={props?.pageContext?.uri}/>
			<Page data={ props.pageContext }/>
		</Layout>
	)
};
export default PageTemplate;
