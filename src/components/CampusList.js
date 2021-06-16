import '../styles/CampusList.css';

function CampusList(props){
    return(
        <div className='column-parent'>
            <div className='column-one'>
                <img alt="image-test" src=""></img>
            </div>

            <div className='column-two'>
                <ul className="campus-name">Campus Name</ul>
                    <li className="student-num-count">(stu-num placeholder)</li>
            </div>

                <button className="edit-button">edit</button>
                <button className="delete-button">delete</button>
            </div>
        
    );
}
export default CampusList;