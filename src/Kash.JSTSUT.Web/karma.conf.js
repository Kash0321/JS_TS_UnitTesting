'use strict';

module.exports = function (config) {
    config.set({

        plugins: [
          'karma-jasmine',
          'karma-phantomjs-launcher',
          'karma-commonjs',
          'karma-coverage'
        ],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            './Scripts/*.js': ['coverage']
        },

        // base path, that will be used to resolve files and exclude
        basePath: './Scripts',

        // list of files / patterns to load in the browser
        frameworks: ['jasmine'],

        files: [
          './ScriptsDev/tests/**/*.js'
        ],


        // list of files to exclude
        exclude: ['lib.js'],

        // test results reporter to use
        // possible values: dots || progress || growl
        reporters: ['progress'],

        // web server port
        port: 8080,

        // cli runner port
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],
        // browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 5000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};