'use strict';
var path = require('path');

module.exports = {
  entry: [
    './app/main'
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'app')
        ],
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['es2015', 'angular2']
        },
        test: /\.js$/
      }
    ]
  }
};
