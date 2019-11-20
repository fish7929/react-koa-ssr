/**
 * @component app.js
 * @description 服务端入口文件
 * @time 2019-11-20 11:56
 * @author fishYu
 */

import Koa from 'koa';
// jsx编译之后会用到React对象, 所以需要引入
// import React from 'react';
import routers from './router';
// import { renderToString } from 'react-dom/server';

const app = new Koa();

// const App = () => <div>Hello Koa SSR</div>

// app.use(ctx => {
//     ctx.body = renderToString(<App />);
// });
//配置路由组件
app.use(routers.routes(), routers.allowedMethods());

app.listen(9000, () => {
    console.log('node 服务器已经启动，请访问localhost:9000');
});