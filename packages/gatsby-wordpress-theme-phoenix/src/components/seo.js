/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO( { description, lang, meta, title, seo, uri } ) {

	const { site } = useStaticQuery(
		graphql`
	      query {
	        site {
	          siteMetadata {
	            title
	            description
	            author
	            siteUrl
	          }
	        }
	      }
	   `
	)

	const metaDescription = description || site.siteMetadata.description;
	const canonical       = `${ site?.siteMetadata?.siteUrl }${ uri }`;
	const ogUrl           = `${ site.siteMetadata.siteUrl }${ uri }`;

	return (
		<Helmet
			htmlAttributes={ {
				lang,
			} }
			link={
				canonical
					? [
						{
							rel: "canonical",
							href: canonical,
						},
					]
					: []
			}
			title={ seo?.opengraphTitle }
			meta={ [
				{
					name: `title`,
					content: seo?.opengraphTitle,
				},
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:locale`,
					content: `en_US`,
				},
				{
					property: `og:url`,
					content: ogUrl,
				},
				{
					property: `og:site_name`,
					content: `Gatsby WooCommerce Theme`,
				},
				{
					property: `og:image`,
					content: seo?.opengraphImage,
				},
				{
					property: `og:title`,
					content: seo?.opengraphTitle || title,
				},
				{
					property: `og:description`,
					content: seo?.opengraphDescription || metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: seo?.twitterTitle || title,
				},
				{
					name: `twitter:description`,
					content: seo?.twitterDescription || metaDescription,
				},

			].concat( meta ) }
		/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
	uri: '',
	seo: {}
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf( PropTypes.object ),
	title: PropTypes.string.isRequired,
	seo: PropTypes.object.isRequired,
	uri: PropTypes.string.isRequired
}

export default SEO
