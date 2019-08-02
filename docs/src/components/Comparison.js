import React from 'react';
import * as PropTypes from 'prop-types';

import { flexRow, spaceBetween } from '../styles';
import { Code } from './Code';

const style = {
	head: {
		...flexRow,
		...spaceBetween,
		fontSize: 16,
	},
	content: {
		...flexRow,
		...spaceBetween,
	},
	left: {
		paddingRight: 8,
		width: '50%',
	},
	right: {
		paddingLeft: 8,
		width: '50%',
	},
}

const Comparison = ({ before, after }) => {
	return (
		<div>
			<div style={style.head}>
				<span>Before</span>
				<span>After</span>
			</div>
			<div style={style.content}>
				<div style={style.left}>
					<Code>{before}</Code>
				</div>
				<div style={style.right}>
					<Code>{after}</Code>
				</div>
			</div>
		</div>
	);
};

Comparison.propTypes = {
	before : PropTypes.string.isRequired,
	after  : PropTypes.string.isRequired,
};

export default Comparison;
export { Comparison };
