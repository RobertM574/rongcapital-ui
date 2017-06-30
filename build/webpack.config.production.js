const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    output: Object.assign({}, baseConfig.output, {
        filename: '[name].prod.js',
    }),
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,  // default
            minimize: true,
            compress: {
                warnings: false,
                drop_console: true
            }
        }),
    ],
    // https://webpack.js.org/configuration/devtool/
    devtool: false,
    // https://webpack.js.org/configuration/stats/
});
