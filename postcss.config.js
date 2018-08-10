const sortingConfig = require('./.postcss-sorting.json');
const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-map': {
      basePath: './src/css/variables',
      maps: [
        'colors.yml',
        'media.yml',
        'zindex.yml',
        'fonts.yml',
        'dimensions.yml'
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
