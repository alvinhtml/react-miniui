//webpack

const path = require('path')
const webpack = require('webpack') //webpack 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //抽离 css 文件，使用这个插件需要单独配置JS和CSS压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //压缩JS
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩CSS
const FileManagerPlugin = require('filemanager-webpack-plugin'); //webpack copy move delete mkdir archive


module.exports = {

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },

    mode: 'development',

    entry: {
        index: './src/index.js'
    },

    // devtool: 'source-map',

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        library: 'react-miniui',
        libraryTarget: 'umd'
    },

    resolve: {
        modules: [path.resolve('node_modules')],
        extensions: ['.js', '.jsx', '.scss', '.css'] //配置省略后缀名
    },

    module: {

        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                      loader: 'sass-loader',
                      options: {
                        includePaths: ['./node_modules/normalize-scss/sass']
                      }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-flow'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                }
            },
            {
                test: /\.(jpg|png|gif|jpeg|bmp|eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 50 * 1024,
                        outputPath: './',
                    }
                }
            }
        ]
    },

    externals: {
        react: 'react'
    },


    plugins: [ //数组，放着所有 webpack 插件
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css'
        }),
    ],

    // watch: true,
    // watchOptions: {
    //     poll: 2000,
    //     aggregateTimeout: 2000,
    //     ignored: /node_modules|vendor|build|public|resources/
    // },

    devServer: {
        port: 8080,
        progress: true,
        contentBase: './dist',
        open: true,
        historyApiFallback: true
    }
}
