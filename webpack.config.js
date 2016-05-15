var Path = require('path');
var Webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:7000',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path: Path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new Webpack.HotModule.ReplacementPlugin(),
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: './src/index.template.html',
			inject: true
		}),
		new Webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css', {
			allChunks: true
		})
	]
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel'],
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.jpg$/,
				loader: 'file-loader'
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader'
			}
		]
	}
}