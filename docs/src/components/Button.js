import React from 'react';
import { DataCaster } from '@daminort/data-caster';

const caster = new DataCaster();
const options = caster.getOptions();

const Button = () => {
	console.log('Button.js, Button [8]', { options });
	return (
		<p>{/*JSON.stringify(options, null, 2)*/} Bla-bla</p>
	);
};

export default Button;
export { Button };
