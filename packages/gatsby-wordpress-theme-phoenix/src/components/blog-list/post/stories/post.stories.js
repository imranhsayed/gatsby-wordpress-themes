/**
 * External dependencies.
 */
import React from 'react';
import Post from "../index";
import data from './post-data';

/**
 * Internal dependencies.
 */
import './../style.scss';

export default {
	title: 'Components/Post',
	component: Post
};

export const post = () => (
	<Post post={ data }/>
);
