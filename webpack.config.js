const path = require('path');

// - Plugins
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

/**
 * --- Configuration via the ENV objecct
 * 
 * @param {Object} env
 * @param {string} env.mode
 * @param {string|string[]} env.presets
 */
const modeConfig = env => require(`./build-utils/webpack.${env.mode}`)(env);
const loadPresets = require('./build-utils/loadPresets');

// - Default config
module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
	return webpackMerge({
		context: __dirname,
		mode: mode,
		entry: path.join(__dirname, 'src', 'index.js'),
		output: {
			filename: 'bundle.js',
			chunkFilename: '[name].lazy-chunk.js', // Lazy loaded bundle naming pattern
			path: path.join(__dirname, 'dist')
		},

		module: {
			rules: [
				{
					test: /\.(jpg | jpeg | svg | png)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 5000 // Files larger than the limit size will NOT be inlined
							}
						}
					]
				}
			]
		},

		plugins: [
			new webpack.ProgressPlugin(),
			new HTMLWebpackPlugin({
				template: path.join(__dirname, 'index.html')
			})
		],
	},
	modeConfig({ mode, presets }),
	loadPresets({ mode, presets })
	)
}