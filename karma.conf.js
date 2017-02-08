module.exports = function(config) {

  const testWebpackConfig = require('./webpack.config');

  const appBase    = 'app/';      
  const appSrcBase = 'app/';      
  const appAssets  = 'base/app/'; 

  const testingBase    = 'testing/'; 
  const testingSrcBase = 'testing/'; 

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],
     webpack: testWebpackConfig,

    client: {
      builtPaths: [appBase, testingBase], 
      clearContext: false
    },

    files: [
      'karma-test-shim.js'
    ],

    proxies: {
      "/app/": appAssets
    },

    exclude: [],
    preprocessors: {'./karma-test-shim.js': ['webpack']},
    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  })
}
