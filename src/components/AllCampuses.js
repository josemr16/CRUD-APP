import '../styles/Navbar.css';
import '../styles/AllCampuses.css';
import CampusList from '../components/CampusList.js';


// import AllCampuses from './components/AllCampuses';
// import CampusList from './components/CampusList';
// import CampusEdit from './components/CampusEdit';
// import NewCampusForm from './components/NewCampusForm';
// import NoCampusRegistered from './components/NoCampusRegistered';
// import CampusNoStudents from './components/CampusNoStudents';
function AllCampuses(props){

    return(
        <div>
            <div className='campuses-container'>
                <h1 className='all-campus-title'>All Campuses</h1>
                <button onClick={props.onAddCampusClick} className='add-campus-btn'>ADD CAMPUS</button> 
            </div>
            <CampusList 
            onNameClick = {props.onCampusNameClick} 
            onCampusEditClick = {props.onCampusEditClick}
            onCampusDeleteClick = {props.onCampusDeleteClick}
            campuses = {props.campuses}/>
        </div>
    );
}
export default AllCampuses;