﻿'use strict';

var webpackConfig = require('./webpack.test.js');
webpackConfig.entry = {};

module.exports = function (config) {
    config.set({

        preprocessors: {
            'Scripts/tests/FooManagerController.spec.ts': ['webpack'],
            'Scripts/tests/FooManagerController.spec.ts': ['coverage']
        },

        webpackMiddleware: {
            stats: {
                chunkModules: false,
                colors: true
            }
        },

        // base path, that will be used to resolve files and exclude
        basePath: '.',

        frameworks: ['jasmine', 'jasmine-matchers', 'jasmine-jquery-matchers'],

        // list of files / patterns to load in the browser
        files: [
          'Scripts/tests/FooManagerController.spec.ts'
        ],


        // list of files to exclude
        // exclude: ['Scripts/_references.js'],

        // test results reporter to use
        // possible values: dots || progress || growl
        reporters: [
            //'progress',
            'kjhtml',
            //'dots',
            'spec',
            'coverage',
            ],

        coverageReporter: {
            reporters: [
                {
                    dir: 'reports/coverage/',
                    subdir: '.',
                    type: 'html'
                },{
                    dir: 'reports/coverage/',
                    subdir: '.',
                    type: 'cobertura'
                }, {
                    dir: 'reports/coverage/',
                    subdir: '.',
                    type: 'json'
                }
            ]
        },

        webpack: webpackConfig,

        // web server port
        port: 8080,

        // cli runner port
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

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
        //browsers: ['Chrome'],
        //browsers: ['Chrome', 'Firefox', 'IE'],
        browsers: ['Chrome'], // Para probar sin navegador, con PhantomJS: http://phantomjs.org/

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 5000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};