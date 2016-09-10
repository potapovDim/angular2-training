var webpack = require('webpack')
module.exports = {
  entry: './app/main.ts',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  }
};