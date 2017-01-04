const webpack = require('webpack')
module.exports = {
  entry: './app/main.ts',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    port: 5050,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  }
}