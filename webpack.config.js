'use strict';
var path = require('path');

module.exports = {
  entry: './app/main',
  module: {
    loaders: [
      {
        loader: [
          'babel?presets[]=es2015,presets[]=es2015,presets[]=angular2,plugins[]=transform-decorators-legacy',
          'angular2-template-loader'
        ],
        include: [path.resolve(__dirname, 'app')],
        test: /\.js$/
      },
      {
        loader: 'raw-loader',
        test: /\.html$/
      }
    ]
  }
};
