const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const chalk = require('chalk');

/* eslint-disable no-console */
console.log(chalk.blue('Opening production build...'));

// Run Browsersync
browserSync({
	port: 4000,
	ui: { port: 4001 },
	server: { baseDir: 'dist' },
	files: [ 'src/*.html' ],
	middleware: [ historyApiFallback() ]
});
