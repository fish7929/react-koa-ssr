/**
 * @component index.js
 * @description 服务端路由入口
 * @time 2019-11-20 14:56
 * @author fishYu
 */

import Router from 'koa-router';
import RouterConfig from '../../app/router';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import React from 'react';

const routers = new Router();

routers.get('/', (ctx, next) => {
    ctx.body = renderToString(
        <StaticRouter location={ctx.url}>
            <RouterConfig />
        </StaticRouter>
    );
    next();
});

routers.get('/list', (ctx, next) => {
    ctx.body = renderToString(
        <StaticRouter location={ctx.url}>
            <RouterConfig />
        </StaticRouter>
    );
    next();
});

export default routers;