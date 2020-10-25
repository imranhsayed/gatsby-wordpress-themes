import React from "react";
import Layout from "../../components/layout";
import Page from '../../components/page';
import SEO from "../../components/seo";
import { getElementorCssLinksData } from "../../utils/elementor";
import { Helmet } from "react-helmet";

const PageTemplate = ( { pageContext } ) => {

	const postId = pageContext?.databaseId;
	const elementorCssLinksData = getElementorCssLinksData(postId);
	const hasElementorSupport = 'false' !== process.env.GATSBY_ELEMENTOR_SUPPORT;

	return (
		<Layout>
			<SEO title="Phoenix: Gatsby WordPress Theme" seo={pageContext?.page?.seo} uri={pageContext?.uri}/>
			<Helmet>
				{
					hasElementorSupport && elementorCssLinksData.length && elementorCssLinksData.map( linkData => (
						<link key={linkData?.id} rel='stylesheet' id={linkData?.id} href={linkData?.link} media='all' />
					) )
				}
			</Helmet>
			<Page data={ pageContext }/>
		</Layout>
	)
};
export default PageTemplate;
