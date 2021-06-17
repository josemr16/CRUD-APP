import '../styles/StudentRow.css';
function StudentRow(props){
	return(

		<div className='stu-row-container'>
			<img className='stu-row-img' src='https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg' alt='student'/>
			<h2 className='stu-row-title'>Student props.name</h2>
			<button className='stu-row-btn'>remove from campus</button>
		</div>

	);

}
export default StudentRow;