/**
 * External dependencies.
 */
import React from 'react';
import FeaturedPosts from '../index';


/**
 * Internal dependencies.
 */
import './../style.scss';
import data from './feature-posts-data';

export default {
	title: 'Components/FeaturedPosts',
	component: FeaturedPosts
};

export const featuredPosts = () => <FeaturedPosts data={ data }/>;
