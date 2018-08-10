module.exports = () => ({
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'eslint-loader',
					options: {
						failOnError: true
					}
				}
			}
		]
	}
});
