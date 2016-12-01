var loaders = require("./loaders");
var pkg = require('./package.json');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./Scripts/app.ts",
    output: {
        path: path.join('Scripts/dist'),
        filename: "bundle.js"
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        // Resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".css", ".ts", ".tsx", ".js"]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        //new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: loaders
    }
}