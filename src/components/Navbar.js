import '../styles/Navbar.css';

function Navbar(props){


	return(
		<div className = 'container'>
			<div className='nav-margin'>
				<span onClick={props.onHomeClick}>
					Home
				</span>
			</div>
			<div>
				<ul className='nav-btn'>
					<li onClick = {props.onCampusesClick}>Campuses</li>
					<li onClick = {props.onStudentsClick}>Students</li>
				</ul>
			</div>
		</div>

	);


}
export default Navbar;