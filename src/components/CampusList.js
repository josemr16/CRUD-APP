import '../styles/CampusList.css';

function CampusList(props){

    let component;

    if (props.campuses.length > 0){

        component = (
            props.campuses.map((campus,i) => {
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
            <div className = 'all-cam-container'>
                {component}
            </div>
        </div>
    );
}
export default CampusList;