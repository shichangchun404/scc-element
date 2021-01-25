const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'index.es.js',
    chunkFilename: '[id].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      main: path.resolve(__dirname, '../src'),
      packages: path.resolve(__dirname, '../packages'),
    },
    modules: ['node_modules']
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new EsmWebpackPlugin()
  ]
};
