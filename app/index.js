/**
 * @component index.js
 * @description 客户端主入口
 * @time 2019-11-19 15:05
 * @author fishYu
 */

import React from 'react';
import { render } from 'react-dom';
// import './style/index';
// import logo from './static/111.jpg';

// function App() {
//     return (
//         <div>
//             <div>Hello World!!!<br />I am Metal.</div>
//             <img src={logo} className='logo' />
//         </div>
//     );
// }

// render(<App />, document.getElementById('app'));

import { BrowserRouter } from 'react-router-dom';
import Router from './router';

render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    document.getElementById('app')
);