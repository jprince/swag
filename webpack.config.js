'use strict';
var path = require('path');

module.exports = {
  entry: './app/main',
  module: {
    loaders: [
      {
        loader: [
          'babel?presets[]=es2015,presets[]=angular2,plugins[]=angular2-annotations,plugins[]=transform-decorators-legacy,plugins[]=transform-flow-strip-types',
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
