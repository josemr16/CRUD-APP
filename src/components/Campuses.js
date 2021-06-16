import '../styles/Navbar.css';
import CampusList from '../components/CampusList.js';

function Campuses(props){
    return(
        <div>
            <div className='container'>
                <h1>All Campuses</h1>
                <button>Add Campus</button>
                {CampusList}
            </div>
            
        </div>
    );
}
export default Campuses;