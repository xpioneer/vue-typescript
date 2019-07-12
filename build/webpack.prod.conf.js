'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const _PROD_ = process.env.NODE_ENV === 'production'
const _BUILD_ENV_ = process.env.BUILD_ENV

console.log('_BUILD_ENV_:', _BUILD_ENV_)

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: path.resolve(__dirname, '../dist')}),
    new OptimizeCSSAssetsPlugin({
      // cssProcessor: require('cssnano')({ autoprefixer: false })
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false,
        compress: {
          drop_console: _PROD_ ? true : false,
        },
        output: {
          comments: false
        }
      },
      parallel: true
    }),
    new HtmlWebpackPlugin({
      title: 'OCard',
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
    // keep modules.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
  ]
})

module.exports = webpackConfig
