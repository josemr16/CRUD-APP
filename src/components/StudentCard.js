import '../styles/StudentCard.css';

function StudentCard(props){
	return(

		<div className='card-container'>
			<img className ='card-img'src='https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg' alt='student'/>
	
			<span className='card-label stu-name'>Student Name</span>
			<span className='card-label'>Campus Name</span>

		</div>

	);
}
export default StudentCard;