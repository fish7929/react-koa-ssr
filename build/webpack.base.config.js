/**
 * @component webpack.base.config.js
 * @description webpack 基本配置文件
 * @time 2019-11-19 18:08
 * @author fishYu
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');

module.exports = {
    entry: resolve('app/index.js'),  //指定入口
    output: {  //设置出口并确定输出的文件名称
        path: resolve('dist'),
        filename: 'index.js'
    },
    module: {
        rules: [  //配置loader
            {
                test: /\.(js|jsx)$/,
                // 只编译app文件夹下的文件
                include: resolve('app'),
                use: {     //编译代码，将代码转成浏览器可以运行的代码
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    }
                }
            },
            {
                test: /\.html$/,
                include: resolve('app'),
                loader: 'html-loader'
            },
            {
                test: /\.less$/,
                include: resolve('app'),
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: `url-loader?limit=1000`
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: `file-loader`
            },
        ]
    },
    resolve: {
        //设置别名
        alias: {
            '@': resolve('app'),
        },
        //文件后缀自动补全，就是import文件的时候如果没写后缀名称优先找下面的
        extensions: ['.js', '.jsx', '.less', '.json', '.ts', '.tsx'],
    },
    //第三方依赖，可以写在这里，不打包
    externals: {},
    //插件
    plugins: [
        new HtmlWebpackPlugin({   //自动生成html的插件
            filename: 'index.html',
            template: resolve('template/index.html')
        })
    ]
};