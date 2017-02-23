const consts = require('./utils/consts')
const config = require('./utils/config')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const path = require('path')
const env = process.env.NODE_ENV.trim(); // 当前环境

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: consts.SRC,
        port: consts.PORT
    },
    entry: [
        'webpack-dev-server/client?http://localhost:',
        'webpack/hot/only-dev-server',
        path.resolve(consts.ENTRY)
    ],
    output: {
        path: path.resolve(consts.DIST),
        publicPath: '/',
        filename: '[id].[hash].js'
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
            }
        ]
    },
    sassLoader: config.sassLoader,
    postcss: function () {
        return [
            require('postcss-browser-reporter'),
            require('postcss-reporter'),
            ...config.postcss
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new OpenBrowserPlugin({
            url: `http://localhost:${consts.PORT}`
        }),
        new webpack.DefinePlugin({
          /*  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),*/



            // ================================
            // 配置开发全局常量
            // ================================
            __DEV__: env === 'development',
            __PROD__: env === 'production',
            __COMPONENT_DEVTOOLS__: false, // 是否使用组件形式的 Redux DevTools
        }),
        ...config.plugins
    ],
    resolve: config.resolve
}
