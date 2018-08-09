'use strict';

// use webpack v4

const path = require('path');
const args = require('yargs').argv;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {

    entry: { main: './src/index.js' },
    devtool: args.mode==='development' ? 'source-map' : false,

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: args.mode==='development' ? '[name].js' : '[name].[chunkhash].js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },

    plugins: [
        new CleanWebpackPlugin('dist', {} ),
        new CleanWebpackPlugin('dist-dev', {} ),
        new CopyWebpackPlugin([
            {from:path.resolve(__dirname,'assets'), to:path.resolve(__dirname, 'dist', 'assets')}
        ]),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                extractComments: true,
                uglifyOptions: {
                }
            })
        ]
    },
};
