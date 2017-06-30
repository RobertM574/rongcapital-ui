// for storybook
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config');
const customConfig = require('./webpack.config.base');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);
    // Extend it as you need.

    console.dir(customConfig.module.rules[2])
    // For load sass
    config.module.rules.push({
        test: /\.sass$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
};
