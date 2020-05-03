import React from "react"
import { graphql } from "gatsby"

const SinglePost = ( props ) => {
	console.warn( 'data', props );
	return (
		<div>
			Post
		</div>
	)
};

export default SinglePost;

// export const query = graphql`
//   query($blogId: ID!) {
//     cms {
//       blogPost(where: { id: $blogId }) {
//         title
//         createdAt
//         post
//         titleImage {
//           url
//           imageFile {
//             childImageSharp {
//               fixed {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//         }
//       }
//     }
//   }`;
