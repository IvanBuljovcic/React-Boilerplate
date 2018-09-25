const path = require('path');
const sortingConfig = require('./.postcss-sorting.json');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-map': {
      basePath: './src/css/variables',
      maps: [
        'colors.yml',
        'dimensions.yml',
        'fonts.yml',
        'media.yml',
        'zindex.yml'
      ]
    },
    'postcss-nested': {},
    autoprefixer: {
      browsers: ['last 3 versions']
    },
    'postcss-sorting': sortingConfig,
    'css-mqpacker': {
      sort: true
    },
    'postcss-discard-comments': {}
  },
  from: path.join(__dirname, 'assets', 'css', 'main.css')
};
