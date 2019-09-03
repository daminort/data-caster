const path = require('path');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
	mode: isProduction ? 'production' : 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs',
	},
	resolve: {
		extensions: ['.js'],
	},
	devtool: isProduction ? false : 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src'),
				],
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
				}
			},
		],
	},
};
