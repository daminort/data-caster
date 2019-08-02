export const basicInit =
`const dc = new DataCaster()
	.init({
  	forceCamelCase: false,
		ignoreExcluded: true,
	});
`;

export const boolExample =
`const serverData = {
    active_status: '-1',
};

const dc = new DataCaster()
    .bool('active_status', {
        resultName: 'isActive',
        adapter: (value) => +value > 0,
        reverter: (value) => value ? '1' : '-1',
    });

const result = dc.adapt(serverData);
// {
//     isActive: false,
// }
`;
