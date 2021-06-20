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

    // let component = (

    //     <div>
    //         <CampusList campuses = {props.campuses}/>
    //     </div>
    // );

    // if (props.campuses.length > 0){

    //     component =(
    //         <div>
    //             <CampusList campuses = {props.}/>
    //         </div>
    //     );
    // }


    return(
        <div>
            <div className='campuses-container'>
                <h1 className='all-campus-title'>ALL CAMPUSES</h1>
                <button className='add-campus-btn'>ADD CAMPUS</button> 
            </div>
            <CampusList campuses = {props.campuses}/>
        </div>
    );
}
export default AllCampuses;