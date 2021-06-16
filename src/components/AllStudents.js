import StudentCardList from './StudentCardList';
import '../styles/AllStudents.css';

function AllStudents(props){

	let component;

	if(props.students.length > 0){

		component = (
			<div>
				<div className='all-stu-btn'>
					<h1 className='all-stu-title'>All Students</h1>  
					<button className='add-btn'>Add Student</button>
				</div>
				<StudentCardList students = {props.students}/>

			</div>
		);

	} 
	else {

		component = (
			<div>

				<h1 className='all-stu-title tc'>All Students</h1>  
				<p className='tc'>There are no students registered in the database.</p>
				<br/>
				<button className='add-btn center-btn'>Add Student</button>

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


