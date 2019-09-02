export const signature =
`string(originName, options = {})
`;

export const example =
`const dc = new DataCaster()
	.string('id')
	.string('name')
	.string('place_id');
	
const result = dc.adapt(serverObject);
`;

export const before =
`{
	id: 1,
	user_name: 'John Snow',
	place_id: 'Winterfell',
}
`;

export const after =
	`{
	id: '1',
	userName: 'John Snow',
	placeID: 'Winterfell',
}
`;
