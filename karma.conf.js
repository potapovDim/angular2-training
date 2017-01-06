module.exports = function(config) {

  const testWebpackConfig = require('./webpack.test');

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
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

      { pattern: 'systemjs.config.js', included: false, watched: false },
      { pattern: 'systemjs.config.extras.js', included: false, watched: false },
      'karma-test-shim.js', 

      { pattern: appBase + '**/*.js', included: false, watched: false },
      { pattern: testingBase + '**/*.js', included: false, watched: false },

      { pattern: appBase + '**/*.html', included: false, watched: false },
      { pattern: appBase + '**/*.css', included: false, watched: false },

      { pattern: appSrcBase + '**/*.ts', included: false, watched: false },
      { pattern: appBase + '**/*.js.map', included: false, watched: false },
      { pattern: testingSrcBase + '**/*.ts', included: false, watched: false },
      { pattern: testingBase + '**/*.js.map', included: false, watched: false}
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
