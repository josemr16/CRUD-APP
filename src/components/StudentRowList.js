import '../styles/StudentRowList.css';
import StudentRow from './StudentRow';

function StudentRowList(props){
	let component = props.students.map((student,i)=> {
		return(

			<div>
				<StudentRow />
			</div>
		);

	});

	return(
		<div>
			{component}
		</div>
	);

}
export default StudentRowList;