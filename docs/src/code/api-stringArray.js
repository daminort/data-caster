export const signature =
`stringArray(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.int('id')
	.string('name')
	.stringArray('places');
	.stringArray('weapons');
	
const result = dc.adapt(serverObject);
`;

export const before =
`{
	id: 1,
	name: 'John Snow',
	places: [
		'Winterfell',
		'Wall',
	],
	weapons: [1, 13, 22],
}
`;

export const after =
	`{
	id: 1,
	name: 'John Snow',
	places: [
		'Winterfell',
		'Wall',
	],
	weapons: ['1', '13', '22'],
}
`;
