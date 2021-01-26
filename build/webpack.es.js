const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'index.es.js',
    chunkFilename: '[id].js',
		library: 'library',
		libraryTarget: 'var'
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new EsmWebpackPlugin()
  ]
})
