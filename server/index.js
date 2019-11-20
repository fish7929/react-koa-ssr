/**
 * @component index.js
 * @description react ssr入口文件
 * @time 2019-11-20 13:58
 * @author fishYu
 */

require('@babel/register')({
    presets: [
        '@babel/preset-react',
        '@babel/preset-env'
    ],
});

require('./app');