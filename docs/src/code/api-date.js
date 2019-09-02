export const signature =
`date(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.int('id')
	.string('name')
	.date('birthday');
	
const result = dc.adapt(serverObject);
`;

export const before =
`{
	id: 1,
	name: 'John Snow',
	birthday: '2000-01-01T00:00:00',
}
`;

export const after =
	`{
	id: 1,
	name: 'John Snow',
	birthday: Sat Jan 01 2000 00:00:00 GMT+0200,
}
`;
