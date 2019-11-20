/**
 * @component utils.js
 * @description 编译脚本的工具类
 * @time 2019-11-19 15:11
 * @author fishYu
 */

const path = require('path');

exports.resolve = (...arg) => path.join(__dirname, '..', ...arg);