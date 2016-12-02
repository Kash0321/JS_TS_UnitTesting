var babel = require('babel-core');
var wallabyWebpack = require('wallaby-webpack');
var webpack = require('webpack');

var webpackPostprocessor = wallabyWebpack({
    module: {
        loaders: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
});

module.exports = function () {
    return {
        files: [
            { pattern: 'ClientCode/**/*.html', load: false },
            { pattern: 'ClientCode/**/*.scss', load: false },
            { pattern: 'ClientCode/**/*.css', load: false },
            { pattern: 'ClientCode/**/*.ts', load: false },
            { pattern: 'ClientCode/**/*.spec.ts', ignore: true },
            { pattern: 'node_modules/**/*.js', ignore: true }
        ],

        tests: [
            { pattern: 'ClientCode/**/*.spec.ts', load: false },
            { pattern: 'node_modules/**/*.js', ignore: true }
        ],

        preprocessors: {
            '**/*.js': file => babel.transform(file.content, { sourceMap: true })
        },
        "testFramework": "jasmine",
        postprocessor: webpackPostprocessor,
        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    };
};