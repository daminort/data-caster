export const bash =
`$ npm install --save @daminort/data-caster`;

export const js =
`import { DataCaster } from 'data-caster';

const adapter = new DataCaster()
	.init()
	.string('name')
	.number('id')
	.bool('user_active', { resultName: 'isActive' });
	
function adaptUser(rawData) {
	return adapter
		.ignoreExcluded(true)
		.adapt();
}
`;

export const json =
`{
	"id": "122",
	"name": "John Snow",
	"user_active": true
}`;
