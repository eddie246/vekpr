const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './frontend/index.html',
});

module.exports = {
	mode: 'development',
	entry: './frontend/index.tsx',
	devtool: 'inline-source-map',

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: [/node_modules/],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},

	resolve: {
		extensions: ['.tsx', '.jsx', '.ts', '.js'],
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	plugins: [htmlPlugin],
	devServer: {
		// proxy: {
		//   '/': 'http://localhost:3000/',
		// },
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 8080,
		historyApiFallback: true,
	},
};
