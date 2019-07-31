export const basicUsageAdapt =
`import { DataCaster } from 'data-caster';

const serverData = {
	id: "122",
	name: "John Snow",
	user_active: 1,
};

const adapter = new DataCaster()
	.init()
	.string('name')
	.number('id')
	.bool('user_active', {
		resultName: 'isActive',
		reverter: (val) => val ? 1 : 0,
	})
	.exclude('id); // for reverting purposes, see example below
	
const adaptUser = (rawData) => adapter
	.ignoreExcluded(true)
	.adapt();
	
const adaptedData = adaptUser(serverData);
// {
// 	 id: 122,
// 	 name: 'John Snow',
// 	 isActive: true,
// };
`;

export const basicUsageRevert =
`// we need to use the same adapter we have created 
// it the 'Adapt data from server' section above

const clientData = {
	name: 'Arya Stark',
	isActive: true,
};

const revertUser = (data) => adapter
	.ignoreExcluded(false)
	.revert();
	
const revertedData = revertUser(clientData);
// {
// 	 name: "Arya Stark",
// 	 user_active: 1,
// };
`;
