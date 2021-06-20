import '../styles/NewCampusForm.css';

function NewCampusForm(props){
    return(
        <div className='form-container'>
            <h1 className=''>New Campus Form</h1>
            <h3 className="">CAMPUS NAME</h3>
            <input id='nc-name'className="nc-input" type="text"></input>
            <h3 className="">CAMPUS LOCATION</h3>
            <input id='nc-location'className="nc-input" type="text"></input>
            <h3 className="">CAMPUS IMAGE URL</h3>
            <input id='nc-url'className="nc-input" type="text"></input>
            <h3 className="">CAMPUS DESCRIPTION</h3>
            <textarea id='nc-description'className='nc-ta' placeholder='Enter description here'></textarea>
            <button onClick = {props.onAddCampusClick}className='nc-btn'>ADD CAMPUS</button>
        </div>
    );
}
export default NewCampusForm;