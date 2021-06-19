
import React,{Component} from 'react';
import '../styles/NewStudentForm.css';

class NewStudent extends Component{
	constructor(props){
		super(props)

		this.state = {
			studentName:props.studentName,
			gpa:props.gpa,
			studentUrl:props.studentUrl
		}
	}

	render(){
		return(

			<div className='new-stu-container'>
				<div>
					<h1 className='new-stu-title'>New student form</h1>
					<div className='new-stu-div'>

						<label className = 'new-stu-label' htmlFor='studentname'>Student Name</label>
						<input placeholder = 'At least 2 chraraters'id ='new-stu-name'className = 'new-stu-input' type='text' name='studentname' />

					</div>
					<div className='new-stu-div' >

						<label className = 'new-stu-label' htmlFor='gpa'>GPA</label>
						<input placeholder = 'number between 0.0 and 4.0'id ='new-stu-gpa'className = 'new-stu-input' type='text' name='gpa' />

					</div>
					<div className='new-stu-div'>

						<label className = 'new-stu-label' htmlFor='studenturl'>Student URL</label>
						<input placeholder = 'leave empty if no url is available'id ='new-stu-url'className = 'new-stu-input' type='text' name='studenturl' />

					</div>
					
		 			<button onClick = {this.props.onSaveChangesClick} className = 'new-stu-btn'>Save changes</button>
		 		</div>
	 		</div>

		);
	}




}
export default NewStudent;

// 	return(

// 		<div>

// 			<h1>Student Name</h1>
// 			<input type='text' />
// 			<button>Add Student</button>


// 		</div>


// 	);


// }
// export default NewStudent;