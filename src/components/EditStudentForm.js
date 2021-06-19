import React,{Component} from 'react';
import '../styles/EditStudentForm.css';

class EditStudent extends Component{
	constructor(props){
		super(props)

		this.state = {
			studentName:'',
			gpa:'',
			studentUrl:''
		}
	}

	render(){
		return(

			<div className='new-stu-container'>
				<div>
					<h1 className='new-stu-title'>Edit student form</h1>
					<div className='new-stu-div'>

						<label className = 'new-stu-label' htmlFor='studentname'>Student Name</label>
						<input placeholder = 'At least 2 chraraters' id='edit-stu-name' className = 'new-stu-input' type='text' name='studentname' />

					</div>
					<div className='new-stu-div' >

						<label className = 'new-stu-label' htmlFor='gpa'>GPA</label>
						<input placeholder = 'A number between 0.0 - 4.0'id='edit-stu-gpa'className = 'new-stu-input' type='text' name='gpa' />

					</div>
					<div className='new-stu-div'>

						<label className = 'new-stu-label' htmlFor='studenturl'>Student URL</label>
						<input placeholder = 'leave empty if not available'id='edit-stu-url'className = 'new-stu-input' type='text' name='studenturl' />

					</div>
					
		 			<button onClick = {this.props.onSaveChangesClick} className = 'new-stu-btn'>Save changes</button>
		 		</div>
	 		</div>

		);
	}




}
export default EditStudent;

