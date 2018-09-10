const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
	devtool: 'nosource-source-map',
	output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].lazy-chunk.js' // Lazy loaded bundle naming pattern
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
