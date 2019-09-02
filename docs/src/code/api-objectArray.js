export const signature =
`objectArray(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.int('id')
	.string('name')
	.objectArray('sisters');
	
const result = dc.adapt(serverObject);
`;

export const before =
`{
	id: 1,
	name: 'John Snow',
	sisters: [
		{ id: 2, name: 'Sansa Stark' },
		{ id: 3, name: 'Arya Stark' },
		null,
		'Rob Stark',
	],
}
`;

export const after =
	`{
	id: 1,
	name: 'John Snow',
	sisters: [
		{ id: 2, name: 'Sansa Stark' },
		{ id: 3, name: 'Arya Stark' },
		{},
		{},
	],
}
`;
