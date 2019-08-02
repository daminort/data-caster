import React from 'react';
import * as PropTypes from 'prop-types';
import { Prism } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const style = {
	wrapper: {
		marginBottom: 16,
	},
	prism: {
		fontSize: 16,
	},
}

const Code = ({ language, showLineNumbers, children }) => {
	const showNumbers = (showLineNumbers && language !== 'bash' && language !== 'json');

	return (
		<div style={style.wrapper}>
			<Prism
				showLineNumbers={showNumbers}
				language={language}
				style={atomDark}
				customStyle={style.prism}
			>
				{children}
			</Prism>
		</div>
	);
};

Code.propTypes = {
	children: PropTypes.node.isRequired,
	language: PropTypes.oneOf(['javascript', 'jsx', 'json', 'bash']),
	showLineNumbers: PropTypes.bool,
};

Code.defaultProps = {
	language: 'javascript',
	showLineNumbers: true,
};

export default Code;
export { Code };
