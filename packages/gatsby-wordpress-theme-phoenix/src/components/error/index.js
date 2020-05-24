import React from 'react';
/**
 * Error Message Component.
 *
 * @param {Object} props Props.
 *
 * @return {*}
 */
const Error = ( props ) => (
	props.message ? <div  className="error-message">{ props.message }</div> : ''
);

export default Error;
