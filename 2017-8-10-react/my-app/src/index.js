import React from 'react';
import ReactDOM from 'react-dom';
//import Inport from './comm/Inport';
import CToP from './comm/CToP';
import './css/Li.css';
ReactDOM.render(<CToP />, document.getElementById('root'));
//热加载
if (module.hot) {
	module.hot.accept();
}