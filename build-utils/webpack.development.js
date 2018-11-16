const webpack = require('webpack');

module.exports = () => ({  
  devtool: 'cheap-module-source-map',
  
  devServer: {
    historyApiFallback: true
  },

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader', 'resolve-url-loader' ]
			}
		]
  },
  
  output: {
    publicPath: '/'
  },

	optimization: {
		namedModules: true
	},

	plugins: [
		new webpack.NamedChunksPlugin()
	]
});
