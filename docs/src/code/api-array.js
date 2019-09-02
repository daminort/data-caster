export const signature =
`array(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.int('id')
	.string('name')
	.array('places');
	.array('weapons');
	
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
	weapons: undefined,
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
	weapons: [],
}
`;
