exports.config = {
    specs: ['./e2e/**/*.e2e-spec.ts'],
    capabilities: {
      browserName: 'chrome',
    },
    baseUrl: 'http://localhost:4200/', 
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function () {},
    },
  };
  