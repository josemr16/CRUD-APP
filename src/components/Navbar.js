import '../styles/Navbar.css';

function Navbar(props){


	return(
		<div className = 'container'>
			<div className='nav-margin'>
				<span>
					Home
				</span>
			</div>
			<div>
				<ul className='nav-btn'>
					<li>Campuses</li>
					<li>Students</li>
				</ul>
			</div>
		</div>

	);


}
export default Navbar;