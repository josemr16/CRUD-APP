import '../styles/ShowStudent.css';

function ShowStudent(props){

	let component;
	if(props.student.CampuseId !== null){
		component = (

			<div>
				<div className='show-stu-container'>
					<img className='show-stu-img' src='https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg' alt='student'/>
					<div className='show-stu-items'>
						<h1>{props.student.name}</h1>
						<span>{props.student.gpa}</span>
						<div className='show-stu-btns'>
							<button onClick = {props.onEditClick} className='show-stu-btn show-stu-edit'>edit</button>
							<button onClick = {props.onDeleteClick} className='show-stu-btn show-stu-del'>delete</button>
						</div>
					</div>
				</div>

				<div>
					<p className='tc'>This student is registered to a campus</p>
					<div className='soc-show-stu-container'>
						<div className='soc-show-stu-items ba'>
							<p>Campus Card goes here</p>
						</div>
						<div className='soc-show-stu-items'>
							<select defaultValue ='default' className='show-stu-sl'>

								<option disabled value='default' hidden>Select  a  campus . . .</option>

							</select>
							<button onClick = {props.onChangeCampusClick}className='soc-show-stu-btn'>Change Campus</button>
						</div>
					</div>
				</div>
			</div>


		);
	} else {

		component =(

			<div>
				<div className='show-stu-container'>
					<img className='show-stu-img' src='https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg' alt='student'/>
					<div className='show-stu-items'>
						<h1>{props.student.name}</h1>
						<span>{props.student.gpa}</span>
						<div className='show-stu-btns'>
							<button onClick = {props.onEditClick} className='show-stu-btn show-stu-edit'>edit</button>
							<button onClick = {props.onDeleteClick} className='show-stu-btn show-stu-del'>delete</button>
						</div>
					</div>
				</div>

				<div>
					<p className='tc'>This student is not registered to a campus</p>
					<div className='snoc-show-stu-container'>
						<div className='center'>

						<select defaultValue ='default' className='show-stu-sl'>

							<option disabled value='default' hidden>Select  a  campus . . .</option>

						</select>
						<button onClick = {props.onAddCampusClick} className='snoc-show-stu-btn'>Add Campus</button>
						</div>

					</div>
				</div>
			</div>
		);

	}
	// For Later: handle part where student is register or not register to campus

	return(
		<div>
			{component}
		</div>
	);
}
export default ShowStudent;