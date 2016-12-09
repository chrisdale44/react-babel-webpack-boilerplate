"use strict";
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin   = require('copy-webpack-plugin');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

let sassLoader = ExtractTextPlugin.extract('style', [
  'css',
  'postcss-loader',
  'sass?precision=3'
].join('!'));

let config = {
  devtool: 'eval-source-map',
  entry: './src/router',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.join(__dirname, './src')]
  },
  module: {
    loaders: [
        {
            test: /.(js|jsx)?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
            presets: ['es2015', 'react']
            }
        },{ 
            test : /\.(scss|css)$/,       
            loader : sassLoader,
            include: __dirname + '/src'
        },{ 
            test : /\.svg$/, 
            loader : 'svg-url-loader'
        },
        { 
            test: /\.jpg$/, 
            loader: 'file-loader'
        },
    ],
    
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/style")]
  },
  postcss: function () {
      return [precss, autoprefixer];
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new CopyWebpackPlugin([
      { from: 'src/images', to: 'images' },
      { from: 'src/fonts', to: 'fonts'}
    ], { copyUnmodified: true })
  ]
};

module.exports = config;