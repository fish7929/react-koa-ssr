/**
 * @component webpack.dev.config.js
 * @description webpack开发环境的编译配置文件
 * @time 2019-11-19 18:57
 * @author fishYu
 */

const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    // 用于调试, inline-source-map模式效率比较高, 所以在dev模式下推荐使用这个
    devtool: 'inline-source-map',
    mode: 'development',
    // 配置服务器
    devServer: {
        // 设置端口号， 默认8000
        port: 8000,
    },
    plugins: [
        //在js中注入全局变量 process.env用来区分环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        }),
    ],
});