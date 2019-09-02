export const signature =
`any(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.int('id')
	.string('name')
	.any('place'),
	.any('wins');
	.any('position');
	.any('weapon');
	
const result = dc.adapt(serverObject);
`;

export const before =
`{
	id: 1,
	name: 'John Snow',
	place: 'Wall',
	wins: [
		'2001-05-12',
		null,
	],
	position: {
		top: 40,
		left: 22,
	},
	weapon: null,
}
`;

export const after =
`{
	id: 1,
	name: 'John Snow',
	place: 'Wall',
	wins: [
		'2001-05-12',
		null,
	],
	position: {
		top: 40,
		left: 22,
	},
	weapon: null,
}
`;
