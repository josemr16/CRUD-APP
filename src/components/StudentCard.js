import '../styles/StudentCard.css';

function StudentCard(props){
	return(

		<div>
			<img src={props.img} alt='student'/>
			<span>Student Name</span>
			<span>Campuses Name</span>
		</div>

	);
}
export default StudentCard;