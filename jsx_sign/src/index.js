import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'


const display = (
  <div className='all'>
    <div className="container d-flex align-items-center text-center">
      <div className="form-signin">
        <form>
          <img className="mb-4" src="./imgs/logo.jpg" alt="" width="120" height="120" />
          <h1 className="h3 mb-3 fw-normal text-info">PLEASE SIGN IN</h1>
          <div className="form-floating">
            <input type="email" className="form-control email" id="floatingInput" required placeholder="name@example.com" />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control password" id="floatingPassword" required placeholder="Password" />
            <label>Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-info" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2021–2069</p>
        </form>
      </div>
    </div>
  </div>
)
ReactDOM.render(
  display,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
