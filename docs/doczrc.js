export default {
	files: '**/*.{mdx}',
	title: 'Data Caster Docs',
	themeConfig: {
		// mode: 'dark',
		// styles: {
		// 	Container: {
		// 		p: 0,
		// 		maxWidth: 1400,
		// 	},
		// },
	},
	menu: [
		{
			name: 'General',
			menu: [
				'Getting started',
			],
		},
		{
			name: 'Transformations',
			menu: [
				'Basics',
				'Phases',
			],
		},
		{
			name: 'API reference',
			menu: [
				'init',
			],
		},
	],
};
