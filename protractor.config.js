
exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./e2e/*.spec.js' ],
   multiCapabilities: [{
    browserName:'chrome'
  }],
  allScriptsTimeout: 110000,
  getPageTimeout: 100000,
  useAllAngular2AppRoots: true
}
