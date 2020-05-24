const config = {
	headerMenuLocation: 'hcms-menu-header',
	footerMenuLocation: 'hcms-menu-footer',
	siteTitle: 'React WordPress Theme', // Will be used if we don't set site title from WordPress customizer.
	siteDescription: 'Awesome theme', // Will be used if we don't set site description from WordPress customizer.
	copyrightText: '© 2020 CODEYTEK ACADEMY.',
	footerMenuTitle: 'About the site',
	homePagePostType: 'post', // Will be used to display 3 latest post on home page of given post type
	homePageTaxonomy: 'category', // // Will be used to display 3 taxonomies on home page of given post type,
	heroSection: {
		heroTitle: 'Amazing world.',
		heroDescription: 'Discover more than just common Landscapes. Try to live inside of the wild nature. Create your own story. Unforgettable and nonrepeating by nobody.',
		heroImgURL: '/images/mountain-illustration.png',
		heroBtnTxt: 'Explore My World',

	},
	searchSection: {
		searchBackURL: '/images/search-background.png',
		searchPlaceholderTxt: '',
		images: [
			{
				src: '/images/bag.png',
				name: 'Solo'
			},
			{
				src: '/images/airplane.png',
				name: 'Flight'
			},
			{
				src: '/images/group.png',
				name: 'Group'
			},
		]
	},
	featuredPostsSection: {
		featuredPostHeading: 'Featured Posts'
	},
	latestPostsSection: {
		latestPostHeading: 'Latest Posts'
	},
	defaultPostImage: '/images/default.jpg', // Used for default post or pages.
};

export default config;
