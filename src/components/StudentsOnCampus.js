import '../styles/StudentsOnCampus.css';
function StudentsOnCampus(props){

	let component;

	if(props.students.length > 0){

		component = (
			<div>

				<h1>Students on campus</h1>  
				<button>Add Students</button>
				<StudentCardList />

			</div>
		);

	} 
	else {

		component = (
			<div>

				<h1>Students on campus</h1>  
				<span>There are no students currently registered to this campus.</span>
				<button>Add Students</button>

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