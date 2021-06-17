import '../styles/CampusList.css';

function CampusList(props){
    return(
        <div className='campuslist-container'>
            <div>
                <img className="building-image"alt="image-test" src="https://images.skyscrapercenter.com/building/east53rdst100seagram-1b.jpg"></img>
            </div>
            <div>
                <h2 className="campus-name">Campus Name</h2>
                <h4 className="count-students">num + Students</h4>

                <button className="cardlist-edit-button">edit</button>
                <button className="cardlist-delete-button">delete</button>
                </div>
            </div>
        
    );
}
export default CampusList;