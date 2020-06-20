import { configure } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// automatically import all files ending in *.stories.js
configure( [
	require.context( "../src/components", true, /\.stories\.js$/ )
], module );

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
	enqueue: () => {
	},
	hovering: () => {
	}
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
	action( "NavigateTo:" )( pathname )
}

// Add viewport addon for mobile responsive development.
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters( {
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
} );
