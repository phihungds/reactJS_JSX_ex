import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const profile = (
  <div className="container">
    <div className="card">
      <div className="card--header" />
      <img className="avatar" src='./imgs/zombie.png' alt="avatar" />
      <div className="card--body">
        <div>
          <p className="text-header">Hoàng Phi Hùng</p>
          <p className="text-sub">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
          <button className="btn third" ><a href='https://learn.codegym.vn/members/u20090106/' target="_blank">FOLLOW</a></button>
        </div>
      </div>
    </div>
  </div>
)

ReactDOM.render(
  profile,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
