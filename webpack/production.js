const config = require('./utils/config')
const consts = require('./utils/consts')
const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    path.resolve(consts.ENTRY)
  ],
  output: {
    path: path.resolve(consts.DIST),
    publicPath: consts.CDN,
    filename: '[id].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },{
        test: /\.scss$/,
        loader: 'style!css!sass'
      }, {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015&presets[]=react&presets[]=stage-1&plugins[]=transform-decorators-legacy'
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=../fonts/[hash].[ext]'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=../fonts/[hash].[ext]'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=../fonts/[hash].[ext]'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=../fonts/[hash].[ext]'
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=10000&name=../images/[hash].[ext]'
      },
      ...config.module.loaders
    ]
  },
  sassLoader: config.sassLoader,
  postcss: function () {
    return config.postcss
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.DedupePlugin(),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].css'),
    ...config.plugins
  ],
  resolve: config.resolve
}
