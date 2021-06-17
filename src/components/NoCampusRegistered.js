import '../styles/NoCampusRegistered.css';


function NoCampusRegistered(props){
    return(
        <div> 
            <div className='ncr-container'>
                <h1 className='ncr-header'>Campus Listing Blank Slate</h1>
                <h1 className='ncr-all-campus-title'>ALL CAMPUSES</h1>
                <h3 className='ncr-display'>There are no campuses registered in the database.</h3>
                <button className='ncr-add-campus-btn'>ADD CAMPUS</button>
            </div>
        </div>
    );
}
export default NoCampusRegistered;