import React from 'react';
import  ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css/animate.css'
import './css/style.css';
import './css/media.css';
import Header from './component/Header/index'
import registerServiceWorker from './registerServiceWorker';
import Serve from './component/Serve'
import Info from "./component/Info"
import Skil from "./component/Skil"
ReactDOM.render(
    <div>
        <Header/>
        <Serve/>
        <Info/>
        <Skil/>
    </div>,
    document.getElementById('root')
)
registerServiceWorker();

