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
						<input className = 'new-stu-input' type='text' name='studentname' />

					</div>
					<div className='new-stu-div' >

						<label className = 'new-stu-label' htmlFor='gpa'>GPA</label>
						<input className = 'new-stu-input' type='text' name='gpa' />

					</div>
					<div className='new-stu-div'>

						<label className = 'new-stu-label' htmlFor='studenturl'>Student URL</label>
						<input className = 'new-stu-input' type='text' name='studenturl' />

					</div>
					
		 			<button className = 'new-stu-btn'>Save changes</button>
		 		</div>
	 		</div>

		);
	}




}
export default EditStudent;

