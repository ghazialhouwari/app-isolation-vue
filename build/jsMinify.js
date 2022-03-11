'use strict'
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = {
    //'babel-polyfill','document-register-element', just in case we need them
    entry: [path.resolve(__dirname, '../dist/templateLoader.html')],
    output: {
        path: path.resolve(__dirname, '../dist/app-isolation/js'),
        filename: "templateLoader.min.js",
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                warnings: false
                }
            },
            sourceMap: false,
            parallel: true
        })
    ]
};
module.exports = webpackConfig
