// for storybook
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');
const os = require('os');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config');
const customConfig = require('./webpack.config.base');

const IS_WINDOWS = os.platform() === 'win32';
const HOST = 'http://localhost:9001';
const STARTUP_CMD = `${IS_WINDOWS ? 'start' : 'open'} ${HOST}`;

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);
    // Extend it as you need.

    // For load sass
    config.module.rules.push(customConfig.module.rules[2]);

    // For automatic open default Broswer
    config.plugins.push(
        customConfig.plugins[4],
        new WebpackShellPlugin({
            onBuildStart: [],
            onBuildEnd: [ STARTUP_CMD ],
        })
    );

    return config;
};
