import React from 'react';
import  ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css/animate.css'
import 'wowjs/dist/wow'
import './style.css';
import './media.css';
import App from './component/App/index'

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root')
)