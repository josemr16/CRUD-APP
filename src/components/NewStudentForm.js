
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

						<label className = 'new-stu-label' HTMLfor='studentname'>Student Name</label>
						<input className = 'new-stu-input' type='text' name='studentname' />

					</div>
					<div className='new-stu-div' >

						<label className = 'new-stu-label' HTMLfor='gpa'>GPA</label>
						<input className = 'new-stu-input' type='text' name='gpa' />

					</div>
					<div className='new-stu-div'>

						<label className = 'new-stu-label' HTMLfor='studenturl'>Student URL</label>
						<input className = 'new-stu-input' type='text' name='studenturl' />

					</div>
					
		 			<button className = 'new-stu-btn'>Save changes</button>
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