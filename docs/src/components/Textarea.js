import React from 'react';

const Textarea = ({ value }) => {
	return (
		<textarea rows={10}>{value}</textarea>
	);
};

export default Textarea;
export { Textarea };
