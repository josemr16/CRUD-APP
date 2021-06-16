import '../styles/StudentCardList.css';
import StudentCard from './StudentCard';

function StudentCardList(props){

	// let component;
	// if(props.students.length > 0){

	// 	component = props.students.map((student, i) => {
	// 		return(

	// 			<StudentCard 
	// 			img = ''
	// 			/>
	// 		);
	// 	});
	// } else {

	// 	component = (

	// 		<div>
	// 			<span>There are no students registered in the database.</span>
	// 		</div>

	// 	);
	// }
	let component = props.students.map((student,i) => {
		return(
			<div>

				<StudentCard />

			</div>
			);

	});

	return(

		{component}
	);
}
export default StudentCardList;