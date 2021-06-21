import '../styles/StudentsOnCampus.css';
import StudentCardList from './StudentCardList';

function StudentsOnCampus(props){

	let component;

	if(props.students.length > 0){

		component = (
			<div className='soc-container'>
				<div className='soc-title-btn'>
					<h1 className='soc-title'>Students on campus</h1>  
					<button className='soc-add-btn'>Add Students</button>
				</div>
					<StudentCardList key ={props.students.id}students = {props.students}/>
				
			</div>
		);

	} 
	else {

		component = (
			<div className='soc-container'>

				<h1 className='snoc-title'>Students on campus</h1>  
				<p className='tc'>There are no students currently registered to this campus.</p>
				<button className='soc-add-btn center-btn-soc'>Add Students</button>

			</div>
		)
	}

	return(
		<div>
			{component}
		</div>
	);
}
export default StudentsOnCampus;