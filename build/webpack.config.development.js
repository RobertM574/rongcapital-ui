const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    output: Object.assign({}, baseConfig.output, {
        filename: '[name].dev.js',
    }),
    // https://webpack.js.org/configuration/devtool/
    devtool: 'source-map',
    // https://webpack.js.org/configuration/stats/
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        assets: true,
        cache: true,
    },
    watchOptions: {
        aggregateTimeout: 500, //ms, default is 300
        poll: true
    },
});
