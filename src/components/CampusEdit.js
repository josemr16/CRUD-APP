import { Component } from 'react';
import '../styles/CampusEdit.css';

class CampusEdit extends Component {

    constructor(props){
		super(props)

		this.state = {
			cname:'',
			clocation:'',
			clink:'',
            cdescription: ''
		}
	}


    render() {
        return (
            <div>
                <div className="card-edit-border">
                    <h1 className="card-title">EDIT CAMPUS</h1>
                    <div className='card-container'>

                        <label className="input-info">Campus Name</label>
                        <input type="text" placeholder="Please enter a non-numeric Name."></input>

                        <label className="input-info">Campus Location</label>
                        <input type="text" placeholder="Please enter a non-numeric Address."></input>

                        <label className="input-info">Campus Image URL</label>
                        <input type="email" placeholder="Please enter a valid URL."></input>

                        <label className="input-info">Campus Description</label>
                        <textarea type="text" placeholder="Enter a description less than 255 char long."></textarea>
                    </div>
                    <div className="edit-info">
                        <button className="save-changes-btn" onClick={this.props.updateCampus}>Save Changes</button>
                        <h3>Students On Campus</h3>


                        <div class="dropdown">
                            <button class="dropbtn">Select student...</button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <button className="add-student" onClick={this.props.addStuToCampus}>Add to Campus</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default CampusEdit;