import StudentCardList from './StudentCardList';
import '../styles/AllStudents.css';

// import {robots} from './robots';
// import StudentCard from './components/StudentCard';
// import StudentCardList from './components/StudentCardList';
// import AllStudents from './components/AllStudents';
// import NewStudent from './components/NewStudentForm';
// import EditStudent from './components/EditStudentForm';
// import StudentsOnCampus from './components/StudentsOnCampus';
// import ShowStudent from './components/ShowStudent';
// import StudentRow from './components/StudentRow';
// import StudentRowList from './components/StudentRowList';
// import Navbar from './components/Navbar';

// let robots2 = [];
// let student = {isOnCampus:false}
// let student2 = {isOnCampus:true}

function AllStudents(props){

	let component;

	if(props.students.length > 0){

		component = (
			<div>
				<div className='all-stu-btn'>
					<h1 className='all-stu-title'>All Students</h1>  
					<button onClick= {props.onBtnClick} className='add-btn'>Add Student</button>
				</div>
				<StudentCardList stuId = {props.stuId} students = {props.students}/>

			</div>
		);

	} 
	else {

		component = (
			<div>

				<h1 className='all-stu-title tc'>All Students</h1>  
				<p className='tc'>There are no students registered in the database.</p>
				<br/>
				<button onClick= {props.onBtnClick} className='add-btn center-btn'>Add Student</button>

			</div>
		)
	}

	return(

		<div>
			{component}
		</div>
	);
}
export default AllStudents;


