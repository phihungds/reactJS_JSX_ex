import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




// Bài tâp 1

// ReactDOM.render(
//   <h4>Browser's details : {navigator.userAgent} </h4>,
//   document.getElementById('root')
// );


// Bài tập 2 

const students = [
  {
    company: 'Deutsches Reich',
    contact: 'Adolf Hitler',
    country: 'Germany'
  },
  {
    company: 'Guadalajara Cartel',
    contact: 'Miguel Ángel Félix Gallardog',
    country: 'Mexico'
  },
  {
    company: 'Getreidegasse',
    contact: 'Wolfgang Amadeus Mozar',
    country: 'Austria'
  },
  {
    company: 'Hogwarts',
    contact: 'Harry Potter',
    country: 'UK'
  },
  
  {
    company: 'Free Home',
    contact: 'Hoàng Phi Hùng',
    country: 'Vietnam'
  }
]

const studentsList = (
  <div>
    <h2>Students</h2>
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        { students.map((student) => (
          <tr>
            <td>{student.company}</td>
            <td>{student.contact}</td>
            <td>{student.country}</td>
          </tr>
        )) }
      </tbody>
    </table>
  </div>
)

ReactDOM.render(
  studentsList,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
