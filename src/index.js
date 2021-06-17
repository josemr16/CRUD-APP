import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {robots} from './robots';
// import StudentCard from './components/StudentCard';
// import StudentCardList from './components/StudentCardList';
import AllStudents from './components/AllStudents';
import NewStudent from './components/NewStudentForm';
import EditStudent from './components/EditStudentForm';
import StudentsOnCampus from './components/StudentsOnCampus';
import ShowStudent from './components/ShowStudent';
// import StudentRow from './components/StudentRow';
import StudentRowList from './components/StudentRowList';
import Navbar from './components/Navbar';

let robots2 = [];
let student = {isOnCampus:false}
let student2 = {isOnCampus:true}

ReactDOM.render(
  <React.StrictMode>
  
    <Navbar />
    <AllStudents students ={robots2}/>
    <AllStudents students ={robots}/>
    <NewStudent />
    <EditStudent />
    <StudentsOnCampus students = {robots2}/>
    <StudentsOnCampus students = {robots}/>
    <ShowStudent student={student2}/>
    <ShowStudent student={student}/>
    <StudentRowList students = {robots2} />
    <StudentRowList students = {robots} />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
