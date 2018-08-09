const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
	devtool: 'nosource-source-map',
	output: {
		filename: '[name].[chunkhash].js'
	},

	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				loader: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin()
	]
});