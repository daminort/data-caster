export const signature =
`numberArray(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.int('id')
	.string('name')
	.numberArray('coords');
	.numberArray('positions');
	
const result = dc.adapt(serverObject);
`;

export const before =
`{
	id: 1,
	name: 'John Snow',
	coords: [
		'16.22',
		'40.51',
	],
	positions: ['1', 6, 'top'],
}
`;

export const after =
	`{
	id: 1,
	name: 'John Snow',
	coords: [
		16.22,
		40.51,
	],
	positions: [1, 6, 0],
}
`;
