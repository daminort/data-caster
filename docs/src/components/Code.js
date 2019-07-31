import React from 'react';
import * as PropTypes from 'prop-types';
import { Prism } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = ({ language, showLineNumbers, children }) => {
	const showNumbers = (showLineNumbers && language !== 'bash' && language !== 'json');

	return (
		<Prism showLineNumbers={showNumbers} language={language} style={atomDark}>
			{children}
		</Prism>
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
