import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StudentCard from './components/StudentCard';
import reportWebVitals from './reportWebVitals';
// import {robots} from './robots';
import StudentCardList from './components/StudentCardList';
import AllStudents from './components/AllStudents';
import Navbar from './components/Navbar';

let robots = [];

ReactDOM.render(
  <React.StrictMode>
    <Navbar />

    <AllStudents students = {robots} />
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
