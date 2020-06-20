/**
 * External dependencies.
 */
import React from 'react';
import Hero from '../index';


/**
 * Internal dependencies.
 */
import './../style.scss';
import data from './hero-data';

export default {
	title: 'Components/Home',
	component: Hero
};

export const hero = () => <Hero data={ data }/>;
