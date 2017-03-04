const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		index: './src/client/index.js'
	},

	output: {
		path: path.join(__dirname, '../client/public/js'),
		filename: '[name].js',
		sourceMapFilename: '[name].map'
	},

	module: {
		rules: [{
			test: /\.jsx$/,
			include: path.join(__dirname, '../src'),
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			include: path.join(__dirname, '../src/styles'),
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.less$/,
			include: path.join(__dirname, '../src/styles'),
			use: [
				'style-loader',
				'css-loader',
				'less-loader'
			]
		}, {
			test: /\.svg$/,
			loader: 'svg-inline',
			include: path.join(__dirname, '../src/images')
		}]
	},

	resolve: {
		modules: [
			path.join(__dirname, '../src'),
			'node_modules'
		]
	},

	devtool: 'source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		})
	]
};
