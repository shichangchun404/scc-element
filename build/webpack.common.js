const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')


module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'index.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'library',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
})
