const path = require('path');

// - Plugins
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

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
    entry: path.resolve(__dirname, 'src', 'index.jsx'),

		output: {
			filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
		},

		module: {
			rules: [

				{ // Image loader
					test: /\.(jpe?g|svg|png|gif)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
                limit: 5000 // Files larger than the limit size will NOT be inlined
							}
						}
					]
        },
        
        { // Font files loader
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },
        
        { // Javascript (JS/JSX) loader
          test: /\.js?x$/,
          exclude: /(node_modules)/,
          use: 'babel-loader'
        }
			]
		},

		plugins: [
      new DashboardPlugin(),
			new webpack.ProgressPlugin(),
			new HTMLWebpackPlugin({
				template: path.resolve(__dirname, 'index.html')
      }),
      new CopyWebpackPlugin(
        [{
          from: 'src/assets',
          to: 'assets'
        }]
      ),
      new WebpackNotifierPlugin({
        title: 'React-Boilerplate',
        contentImage: path.resolve(__dirname, 'src', 'assets', 'images', 'react_logo.png')
      })
    ],
    
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        'config': path.resolve(__dirname, 'config', mode, 'config.js'),
        'utils': path.resolve(__dirname, 'src', 'redux', 'utils')
      }
    }
	},
	modeConfig({ mode, presets }),
	loadPresets({ mode, presets })
	)
}
