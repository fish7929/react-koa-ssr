/**
 * @component router.js
 * @description 前端页面的路由组件
 * @time 2019-11-20 14:06
 * @author fishYu
 */

import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';

const Home = () => (
    <div>
        <h1>首页</h1>
        <Link to='/list'>跳转列表页</Link>
    </div>
)

const list = [
    'react真好玩',
    'koa有点意思',
    'ssr更有意思'
];

const List = () => (
    <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
)

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/list' component={List} />
    </Switch>
)