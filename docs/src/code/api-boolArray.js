export const signature =
`boolArray(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.int('id')
	.string('name')
	.boolArray('wins');
	
const result = dc.adapt(serverObject);
`;

export const before =
`{
	id: 1,
	name: 'John Snow',
	wins: [
		'1',
		'false',
		null,
		'win',
	],
}
`;

export const after =
	`{
	id: 1,
	name: 'John Snow',
	wins: [
		true,
		true,
		false,
		true,
	],
}
`;
