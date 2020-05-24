import React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/home/hero";
import { isEmpty } from 'lodash';

const FrontPage = ( props ) => {

	console.warn( 'props', props );
	const { pageContext: { page: { title, frontPageMeta: { banner } }, posts } } = props;

	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<>
						<Hero data={ banner } />
					</>
				) : (
					{/*<Error message="Something Went Wrong"  />*/}
				)
			}
		</Layout>
	)
};
export default FrontPage;
