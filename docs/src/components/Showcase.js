import React from 'react';

import Textarea from './Textarea';
import Button from './Button';

import {
	flexRow,
	spaceBetween,
} from '../styles';

const styles = {
	wrapper: { ...flexRow, ...spaceBetween },
};

const Showcase = ({ name }) => {
	return (
		<div style={styles.wrapper}>
			<Textarea value="Origin text"/>
			<div>
				<Button title="Adapt >" />
				<Button title="< Revert" />
			</div>
			<Textarea value="Result text"/>
		</div>
	);
};

export default Showcase;
export { Showcase };
