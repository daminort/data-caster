const path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs',
	},
	resolve: {
		extensions: ['.js'],
	},
	devtool: "cheap-module-source-map",
};
