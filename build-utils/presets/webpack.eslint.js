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
						env: {
							browser: true,
							es6: true,
							jest: true,
							node: true
						},
						extends: [
							'airbnb',
							'prettier'
						],
						parser: 'babel-eslint',
						parserOptions: {
							ecmaFeatures: {
								jsx: true
							},
							ecmaVersion: 7,
							sourceType: 'module'
						},
						plugins: [ 'prettier' ],
						rules: {
							'import/no-extraneous-dependencies': 'off',
							'import/no-unresolved': 'off',
							'import/extensions': 'off',
							'no-var': 'off',
							'no-underscore-dangle': 'off',
							'camelcase': 'off',
							'react/prop-types': [
								2, {
										'ignore': ['children']
								}
							]
						}
					}
				}
			}
		]
	}
});