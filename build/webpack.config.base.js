process.traceDeprecation = true

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const autoprefixer = require('autoprefixer')({browsers: ['last 4 versions']});
const precss = require('precss');

const pkg = require('../package.json');

// 输出目录
const DIST_PATH = path.join(__dirname, '../dist');
// 源码目录
const SRC_PATH = path.join(__dirname, '../src');

// 当前是否是开发环境
const __DEV__ = process.env.NODE_ENV === 'development';

const plugins = [
    // 环境定义
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"' + process.env.NODE_ENV + '"',
        }
    }),
    // https://github.com/johnagan/clean-webpack-plugin
    // 清除旧文件
    new CleanWebpackPlugin([DIST_PATH], {
        root: path.join(__dirname, '../'),
        verbose: true,
        dry: false,
        exclude: [],
    }),
    // 文件头部说明
    new webpack.BannerPlugin({ banner: `Powered by FE @ Cube team Version ${pkg.version}`, raw: false, entryOnly: true }),
    // 分离对react等的依赖
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    // 分离CSS文件
    new ExtractTextPlugin({
        filename: '[name].sass.css',
        disable: false,
        allChunks: true
    }),
];

module.exports = {
    plugins,
    entry: {
        rongcapital: SRC_PATH,
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: DIST_PATH,
    },
    module: {
        //noParse: /node_modules/,
        rules: [
            {
                // use babel-loader for *.js or *.jsx files
                test: /\.js[x]?$/,
                //loaders: __DEV__ ? ['react-hot'].concat(['babel']) : ['babel'],
                use: ['babel-loader'],
                // important: exclude files in node_modules
                // otherwise it's going to be really slow!
                exclude: /node_modules/
            },
            {
                // use css-loader for *.css files
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({ 
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
                exclude: /node_modules/
            },
            {
                // use sass-loader for *.sass files
                test: /\.sass/i,
                use: ExtractTextPlugin.extract({ 
                    fallback: 'style-loader',
                    use: [
                        { 
                            loader: `css-loader?modules&localIdentName=${ __DEV__ ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]' }`,
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    precss,
                                    autoprefixer
                                ]
                            }
                        },
                        {
                            loader: "sass-loader",
                        },
                    ],
                }),
                exclude: /node_modules/
            },
            {
                // load image file
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    // &publicPath=&outputPath=
                    'file-loader?hash=sha512&digest=hex&limit=10240&name=img/[name].[ext]?[hash]'
                ]
            },
            {
                // font file
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader?limit=10000&minetype=application/font-woff' ]
            }, 
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader?limit=10000&minetype=application/font-woff' ]
            }, 
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader?limit=10000&minetype=application/octet-stream' ]
            }, 
            {
                test: /\.ijmap(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader?limit=10000&minetype=application/font-woff' ]
            }, 
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'file-loader' ]
            }, 
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader?limit=10000&minetype=image/svg+xml' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'src'),
            'node_modules',
        ]
    },
};
