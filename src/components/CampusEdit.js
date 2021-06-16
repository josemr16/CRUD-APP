import '../styles/CampusEdit.css';

function CampusEdit(props){
    return(
        <div>
            <div>
            <h1 className="card-title">Edit Campus</h1>
            <div className='card-container'>

            <label className="input-info">Campus Name</label>
            <input type="text" onChange="putFunctionHere"></input>
            
            <label className="input-info">Campus Location</label>
            <input type="text" onChange="putFunctionHere"></input>
           
            <label className="input-info">Campus Image URL</label>
            <input type="email" onChange="putFunctionHere"></input>
            
            <label className="input-info">Campus Description</label>
            <textarea type="text" onChange="putFunctionHere"></textarea>
           </div>
           <div className="edit-info">
            <button className="save-changes-btn" onClick="putFunctionHere">Save Changes</button>
            <h3>Students On Campus</h3>


            <div class="dropdown">
            <button class="dropbtn">Select student...</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
             </div>
            </div>
            <button className="add-student">Add to Campus</button>


            </div>

            </div>
        </div>
    );
}
export default CampusEdit;