const SeoFragment = `
fragment SeoFragment on hwgraphql_SEO {
	  canonical
	  title
	  metaDesc
	  metaRobotsNoindex
	  metaRobotsNofollow
	  opengraphAuthor
	  opengraphDescription
	  opengraphTitle
	  opengraphDescription
	  opengraphImage {
	    sourceUrl
	  }
	  opengraphUrl
	  opengraphSiteName
	  opengraphPublishedTime
	  opengraphModifiedTime
	  twitterTitle
	  twitterDescription
	  twitterImage {
	    sourceUrl
	  }
}
`;

module.exports.SeoFragment = SeoFragment;
