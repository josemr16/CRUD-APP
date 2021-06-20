import React ,{Component} from 'react';
import Navbar from './Navbar';
import AllStudents from './AllStudents';
import NewStudent from './NewStudentForm';
import ShowStudent from './ShowStudent';
import EditStudent from './EditStudentForm';

class App extends Component {
	constructor(){
		super()

		this.state = {
			students:[],
			campuses:[],
			path:'home',
			student:[]
		}

		this.handleNewStudentForm = this.handleNewStudentForm.bind(this);
		this.handleEditStudentForm = this.handleEditStudentForm.bind(this);
		this.updateState = this.updateState.bind(this);
	}

	componentDidMount(){
		fetch('http://localhost:3001/AllStudents')
		.then(res => res.json())
		.then(students => this.setState({students}))
		// .catch(console.log);

		console.log(this.state.students);
	}

	updateState(){
		fetch('http://localhost:3001/AllStudents')
		.then(res => res.json())
		.then(students => this.setState({students}))
	}

	handleOnStudentNavBarClick = () => {

		this.setState({path:'students'})
		fetch('http://localhost:3001/AllStudents')
		.then(res => res.json())
		.then(students => this.setState({students}))

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
			fetch('http://localhost:3001/addStudent',{
			method: 'post',
			headers: {'Content-Type' : 'application/json'},
			body: JSON.stringify({
				name:name.value,
				imageUrl:url.value,
				gpa:gpa.value
				
			})
		})
		.then(res => res.json())
		.then(res=> {

			this.setState({student:res})
			this.setState({path:'showstudent'})

		})
		.catch(err => console.log('Some err '+err));

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
			fetch(`http://localhost:3001/student/${this.state.student.id}/edit`,{
			method: 'put',
			headers: {'Content-Type' : 'application/json'},
			body: JSON.stringify({
				name:name.value,
				imageUrl:url.value,
				gpa:gpa.value
				
			})
		})
		.then(res => res.json())
		.then(res=> {

			this.setState({student:res})
			this.setState({path:'showstudent'})

		})
		.catch(err => console.log('Some err '+err));
			// this.setState({path:'showstudent'})
		}
 
	}

	onStudentNameClick = (id) => {
		fetch(`http://localhost:3001/Student/${id}`)
		.then(res => res.json())
		.then(student=> this.setState({student:student[0]}))

		this.setState({path:'showstudent'})
		console.log(this.state.student)
		

	}

	handleOnDeleteStudent = async () => {

		await fetch(`http://localhost:3001/removestudent/${this.state.student.id}`, {
			method: 'delete',
			headers: {'Content-Type': 'application/json'}
		})

		this.updateState();
		this.setState({path:'students'});
	}

	render(){
		
		// fetch('http://localhost:3001/AllStudents')
		// .then(res => res.json())
		// .then(students => this.setState({students}))

		// let student = {isOnCampus:true}

		// console.log(this.state.path)

		let component;

		switch(this.state.path){
			case 'students':
			component = (
				<div>
					<AllStudents 
					onBtnClick = {()=>this.setState({path:'newstudent'})} 
					students = { this.state.students} 
					stuId = {this.onStudentNameClick} />
				</div>

			);
			// ()=> this.updateState()
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
					student = {this.state.student} 
					onEditClick = {()=>this.setState({path:'editstudent'})}
					onDeleteClick = {this.handleOnDeleteStudent}/>
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
				onStudentsClick ={this.handleOnStudentNavBarClick} />
				{component}

			</div>
		);
	}
}
export default App;
