import '../styles/CampusEdit.css';

function CampusEdit(props){
    return(
        <div>
        <div className='border'>

            <label className="input-info">Campus Name</label>
            <input type="text" onChange="putFunctionHere"></input>
            <br/>
            <label className="input-info">Campus Location</label>
            <input type="text" onChange="putFunctionHere"></input>
            <br/>
            <label className="input-info">Campus Image URL</label>
            <input type="email" onChange="putFunctionHere"></input>
            <br/>
            <label className="input-info">Campus Description</label>
            <textarea type="text" onChange="putFunctionHere"></textarea>
            <br/>
            <button className="tc save-changes-btn" onClick="putFunctionHere">Save Changes</button>
            <br/>
            <label>Students On Campus</label>
            <br/>

        </div>
        </div>
    );
}
export default CampusEdit;