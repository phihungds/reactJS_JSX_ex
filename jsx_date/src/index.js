import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const tick = () => {
ReactDOM.render(
  <div>
      <h1>Xin chào</h1>
      <h2>Bây giờ là {new Date().toLocaleTimeString()}.</h2>
    </div>,
  document.getElementById('root')
);}
setInterval(tick(),1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
