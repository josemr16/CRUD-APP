import '../styles/StudentCardList.css';
import StudentCard from './StudentCard';

function StudentCardList(props){

	let component = props.students.map((student,i) => {

		return(
			<div key={student.id} >
				<StudentCard onNameClick ={()=> props.stuId(student.id)} name={student.name} />
			</div>
			);

	});

	return(
		<div className='cardlist-container'>
			{component}
		</div>
	);
}
export default StudentCardList;