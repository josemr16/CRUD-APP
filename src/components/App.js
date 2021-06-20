import React ,{Component} from 'react';
import Navbar from './Navbar';
import AllStudents from './AllStudents';
import NewStudent from './NewStudentForm';
import ShowStudent from './ShowStudent';
import EditStudent from './EditStudentForm';
import CampusEdit from './CampusEdit';

class App extends Component {
	constructor(){
		super()

		this.state = {
			students:[],
			campuses:[],
			path:'home'
		}

		this.handleNewStudentForm = this.handleNewStudentForm.bind(this);
		this.handleEditStudentForm = this.handleEditStudentForm.bind(this);
	}

	componentDidMount(){
		fetch('http://localhost:3004/AllStudents')
		.then(res => res.json())
		.then(students => this.setState({students:students}))
		.catch(console.log);

		console.log(this.state.students);
	}

	handleNewStudentForm(){
		let name = document.querySelector('#new-stu-name');
		let gpa = document.querySelector('#new-stu-gpa');
		let url = document.querySelector('#new-stu-url');

		if(name.value.length < 2){
			alert('name should have 2 or more chraraters & gpa should be between 0.0 and 4.0');
			name.style.border = '1px solid red';

		}else if(name.value.length > 2){
			name.style.border = '1px solid blue';
		}

		if (gpa.value > 4  || gpa.value < 0 || isNaN(gpa.value) || gpa.value.length < 1){
			alert('gpa should be a number between 0.0 and 4.0');
			gpa.style.border = '1px solid red';
		} else{
			gpa.style.border = '1px solid blue';
			// will be making fetch here
			this.setState({path:'showstudent'})
		}
 
	}
	handleEditStudentForm(){
		let name = document.querySelector('#edit-stu-name');
		let gpa = document.querySelector('#edit-stu-gpa');
		let url = document.querySelector('#edit-stu-url');

		if(name.value.length < 2){
			alert('name should have 2 or more chraraters & gpa should be between 0.0 and 4.0');
			name.style.border = '1px solid red';

		}else if(name.value.length > 2){
			name.style.border = '1px solid blue';
		}

		if (gpa.value > 4  || gpa.value < 0 || isNaN(gpa.value) || gpa.value.length < 1){
			alert('gpa should be a number between 0.0 and 4.0');
			gpa.style.border = '1px solid red';
		} else{
			gpa.style.border = '1px solid blue';
			// will be making fetch here
			this.setState({path:'showstudent'})
		}
 
	}

	render(){

		let student = {isOnCampus:true}

		// console.log(this.state.path)

		let component;

		switch(this.state.path){
			case 'students':
			component = (
				<div>
					<AllStudents 
					onBtnClick = {()=>this.setState({path:'newstudent'})} 
					students = {[1]} />
				</div>
			);
			break

			case 'newstudent':
			component = (
				<div>
					<NewStudent 
					onSaveChangesClick = {this.handleNewStudentForm} />
				</div>
			);
			break

			case 'showstudent':
			component = (
				<div>
					<ShowStudent 
					student = {student} 
					onEditClick = {()=>this.setState({path:'editstudent'})} />
				</div>
			);
			break
			case 'editstudent':
				component = (
					<div>
						<EditStudent 
						 onSaveChangesClick = {this.handleEditStudentForm}/>
					</div>
				);
			break
			default:
				component = (
					<div>
						<h1>HomePage</h1>
					</div>
				);
		}

		return(
			<div>
				<Navbar 
				onHomeClick ={()=>this.setState({path:'home'})}
				onCampusesClick ={''}
				onStudentsClick ={()=>this.setState({path:'students'})} />
				{component}

			</div>
		);
	}
}
export default App;
