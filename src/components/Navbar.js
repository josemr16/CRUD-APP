import '../styles/Navbar.css';
// testing pull on git

function Navbar(props){


	return(
		<div className = 'nav-container'>
			<div>
				<a href="#"><h4 className='home-btn'>Home</h4></a>
			</div>
			<div>
				<a href="#"><h4 className='campus-link'>Campuses</h4></a>
			</div>
			<div>
				<a href="#"><h4 classname='student-link'>Students</h4></a>
			</div>
		</div>
	);
}
export default Navbar;