export const signature =
`object(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.int('id')
	.string('name')
	.object('job');
	.object('positions');
	
const result = dc.adapt(serverObject);
`;

export const before =
`{
	id: 1,
	name: 'John Snow',
	job: {
		id: '13',
		name: 'Warrior',
	},
	positions: null,
}
`;

export const after =
	`{
	id: 1,
	name: 'John Snow',
	job: {
		id: '13',
		name: 'Warrior',
	},
	positions: {},
}
`;
