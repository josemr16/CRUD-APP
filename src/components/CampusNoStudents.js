import '../styles/CampusNoStudents.css';


function CampusNoStudents(props){

    return(
        <div className='cns-container'>
            <div>
                <img className='building-placeholder'alt='building-placeholder' src='https://images.skyscrapercenter.com/building/chaninbldg-5b.jpg'></img>
            </div>

            <div>
                <h1 className='cns-campus-name'>CAMPUS.NAME</h1>

                <p className='cns-description'> This room divider has intricate wrap-around 
                woven pattern made of natural bamboo. This divider acts as a full-length piece of art. 
                It may be used for privacy, to divide a bedroom or define a room/space. Whether 
                it's for home or the work place these screens are versatile and an ingenious addition 
                to any interior, making them a must-have for modern décor.</p>
            </div>

            <div>
                <p className='cns-address'>2063 Bartow Avenue, Bronx, NY 10475</p>
            </div>

            <div className="cns-btn-container">
                <button className='cns-edit-btn'>Edit</button>
                <button className='cns-delete-btn'>Delete</button>
            </div>
       </div>
    );
}
export default CampusNoStudents;