const webpack = require('webpack');

module.exports = () => ({
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},

	optimization: {
		namedModules: true
	},

	plugins: [
		new webpack.NamedChunksPlugin()
	]
});