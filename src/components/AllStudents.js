import StudentCardList from './StudentCardList';
import '../styles/AllStudents.css';

function AllStudents(props){

	if(props.students.length > 0){

		component = (
			<div>

				<h1>All Students</h1>  
				<button>Add Student</button>
				<StudentCardList />

			</div>
		);

	} 
	else {

		component = (
			<div>

				<h1>All Students</h1>  
				<span>There are no students registered in the database.</span>
				<button>Add Student</button>

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


