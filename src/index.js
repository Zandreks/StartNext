import React from 'react';
import  ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css/animate.css'
import 'wowjs/dist/wow'
import './css/style.css';
import './css/media.css';
import Header from './component/Header/index'
import registerServiceWorker from './registerServiceWorker';
import Serve from './component/Serve'


ReactDOM.render(
    <div>
        <Header/>
        <Serve/>
    </div>,
    document.getElementById('root')
)
registerServiceWorker();
