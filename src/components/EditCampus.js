import '../styles/NewCampusForm.css';

function NewCampusForm(props){
    return(
        <div className='form-container'>
            <h1 className=''>Edit Campus Form</h1>
            <h3 className="">CAMPUS NAME</h3>
            <input id='ec-name'className="nc-input" type="text"></input>
            <h3 className="">CAMPUS LOCATION</h3>
            <input id='ec-location'className="nc-input" type="text"></input>
            <h3 className="">CAMPUS IMAGE URL</h3>
            <input id='ec-url'className="nc-input" type="text"></input>
            <h3 className="">CAMPUS DESCRIPTION</h3>
            <textarea id='ec-description'className='nc-ta' placeholder='Enter description here'></textarea>
            <button onClick = {props.onSaveChangesClick}className='nc-btn'>Save Changes</button>
        </div>
    );
}
export default NewCampusForm;