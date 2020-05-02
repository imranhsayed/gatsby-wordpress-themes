export const normalizePath = path => {

	const pathStr = path.split( '/');

	// If the path ends with '/' get the second last item
	if ( path?.endsWith( `/` ) ) {

		const strIndex = pathStr.length ? ( pathStr.length - 2 ) : '';

		if ( strIndex ) {
			path = `/${ pathStr[ strIndex ] }/`
		}
	}

	// If the path ends with '/' get the second last item.
	if ( ! path?.endsWith( `/` ) ) {
		const strIndex = pathStr.length ? ( pathStr.length - 1 ) : '';

		if ( strIndex ) {
			path = `/${ pathStr[ strIndex ] }/`
		}
	}

	return path;

}
