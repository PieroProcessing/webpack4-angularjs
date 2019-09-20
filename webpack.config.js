var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
var extractPlugin = new miniCssExtractPlugin({filename: 'common.css'});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].bundle.js',
//				publicPath:'/dist'
    },
    module: {
        rules: [
            {
                test: /src.*\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['lodash'],
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /src.*\.(css|scss|sass)$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /src.*\.html$/,
                use: ['html-loader']
            },
            {
                test: /src.*\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.wav$|\.mp3$|\.(woff(2)?|ttf|)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/media',
                            publicPath: 'assets/media'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false
            },
            sourceMap: true
        })],
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `${packageName.replace('@', '')}`;
                    }
                },
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new LodashModuleReplacementPlugin,
        new BundleAnalyzerPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
}