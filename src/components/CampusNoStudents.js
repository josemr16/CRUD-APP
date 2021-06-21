import '../styles/CampusNoStudents.css';


function CampusNoStudents(props){

    return(
        <div className='cns-container'>
            <div className='flex-container'>
                <div className='flex-container-el1'>
                    <img className='building-placeholder'alt='building-placeholder' src='https://images.skyscrapercenter.com/building/chaninbldg-5b.jpg'></img>
                    <p className='cns-address'>{`${props.campus.address}`}</p>
                </div>

                <div className='flex-container-el2'>
                    <h1 className='cns-campus-name'>{`${props.campus.name}`}</h1>

                    <p className='cns-description'> {`${props.campus.description}`}</p>

                    <div className="cns-btn-container">
                        <button onClick = {props.onEditShowCampus}className='cns-edit-btn'>Edit</button>
                        <button onClick = {props.onDeleteShowCampus} className='cns-delete-btn'>Delete</button>
                    </div>

                </div>
            </div>

            <div>
                
            </div>

            
       </div>
    );
}
export default CampusNoStudents;