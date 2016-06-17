var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.js'),
        vendors: ['react', 'react-dom'],
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js'],
    },
    //启动dev source map，出错以后就会采用source-map的形式直接显示你出错代码的位置。
    devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        //只要配置dev server map这个参数就可以了
        proxy: {
            '/api/*': {
                target: 'localhost:8080',
                secure: false
            }
        }
    },
    //babel重要的loader在这里
    module: {
        loaders: [{
            test: /\.(?:js|jsx)$/,
            include: APP_PATH,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                //添加两个presents 使用这两种presets处理js或者jsx文件
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192',
        }]
    },
    plugins: [
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new HtmlwebpackPlugin({
            title: 'My first react app',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            chunks: ['app', 'vendors'],
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.BannerPlugin('react'),
    ]

}
