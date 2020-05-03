// import React from "react"
// import { graphql } from "gatsby"
//
// export default ({ data }) => {
// 	console.warn( 'data page', data );
// 	return (
// 		<div>
// 			Page
// 		</div>
// 	)
// }
//
// export const query = graphql`
//   query page($id: String!, $nextPage: String, $previousPage: String) {
//     page: wpPage(id: { eq: $id }) {
//       title
//       content
//       featuredImage {
//         remoteFile {
//           ...HeroImage
//         }
//       }
//     }
//
//     nextPage: wpPage(id: { eq: $nextPage }) {
//       title
//       uri
//     }
//
//     previousPage: wpPage(id: { eq: $previousPage }) {
//       title
//       uri
//     }
//   }
// `
