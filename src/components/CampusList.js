import '../styles/CampusList.css';

function CampusList(props){

    let component;

    if (props.campuses.length > 0){

        component = (
            props.campuses.map((campus,i) => {
                return(
                    <div key={campus.id}>
                        <div  className='campuslist-container'>

                            <div>
                                <img className="building-image"alt="campus" src="https://images.skyscrapercenter.com/building/east53rdst100seagram-1b.jpg"></img>
                            </div>

                            <div>
                                <h2 onClick={()=>props.onNameClick(campus.id)} className="campus-name pointer">{`${campus.name}`}</h2>
                                <h4 className="count-students">{`#students`}</h4>

                                <button onClick = {()=>props.onCampusEditClick(campus.id)} className="cardlist-edit-button">edit</button>
                                <button onClick = {()=>props.onCampusDeleteClick(campus.id)}className="cardlist-delete-button">delete</button>
                            </div>

                        </div>
                    </div>
                )
            })
        );
    } else {
        component = (
            <div>
                <h1>There are no students registered in the database</h1>

            </div>
        );
    }

    return(
        <div>
            <div className = 'cl-flex'>
                {component}
            </div>
        </div>
    );
}
export default CampusList;