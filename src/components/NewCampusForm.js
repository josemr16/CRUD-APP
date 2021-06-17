import '../styles/NewCampusForm.css';

function NewCampusForm(props){
    return(
        <div className='form-container'>
            <h2 className='ncf-header'>New Campus Form</h2>
            <h1 className="form-campus-name">CAMPUS NAME</h1>
            <input className="form-input-field" type="text"></input>
            <button className='form-add-button'>ADD CAMPUS</button>
        </div>
    );
}
export default NewCampusForm;