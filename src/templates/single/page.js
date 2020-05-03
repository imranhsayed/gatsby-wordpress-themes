import React from "react"
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const IndexPage = ( props ) => {

	const {
		      pageContext: { id, postId, title, content },
		      data,
	      } = props;

	return (
		<Layout data={ data.HWGraphQL }>
			<SEO title={ title } header={ data.HWGraphQL.header }/>
			<div>{ title }</div>
			<div
				className="content"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</Layout>
	)
};

export const query = graphql`
    query {
        HWGraphQL {
            header: getHeader {
                siteLogoUrl
                siteTagLine
                siteTitle
                favicon
            }
            headerMenuItems: menuItems(where: {location: HCMS_MENU_HEADER}) {
                edges {
                    node {
                        id
                        menuItemId
                        label
                        url
                        childItems {
                            edges {
                                node {
                                    menuItemId
                                    label
                                    url
                                }
                            }
                        }
                    }
                }
            }
            footer: getFooter {
                copyrightText
                sidebarOne
                sidebarTwo
                socialLinks {
                    iconUrl
                    iconName
                }
            }
            footerMenuItems: menuItems(where: {location: HCMS_MENU_FOOTER}) {
                edges {
                    node {
                        id
                        menuItemId
                        label
                        url
                        childItems {
                            edges {
                                node {
                                    menuItemId
                                    label
                                    url
                                    id
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage
