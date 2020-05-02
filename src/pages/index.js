import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ( { data } ) => {

	return (
		<Layout data={ data.HWGraphQL }>
			<SEO title="Home" header={ data.HWGraphQL.header }/>
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
