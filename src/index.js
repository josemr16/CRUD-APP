import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {robots} from './robots';
// import StudentCard from './components/StudentCard';
// import StudentCardList from './components/StudentCardList';
// import AllStudents from './components/AllStudents';
// import NewStudent from './components/NewStudentForm';
// import StudentsOnCampus from './components/StudentsOnCampus';
// import ShowStudent from './components/ShowStudent';
// import StudentRow from './components/StudentRow';
import StudentRowList from './components/StudentRowList';
import Navbar from './components/Navbar';

// let robots = [];
// let student = {isOnCampus:true}

ReactDOM.render(
  <React.StrictMode>
    <Navbar />

    <StudentRowList students = {robots} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
