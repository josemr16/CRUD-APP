import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
// import AllCampuses from './components/AllCampuses';
// import CampusList from './components/CampusList';


ReactDOM.render(
  <React.StrictMode>
    <App />
    
 {/*   <CampusList campuses = {[]}/>*/}
   
  </React.StrictMode>,
  document.getElementById('root')
);
// testing commment
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();