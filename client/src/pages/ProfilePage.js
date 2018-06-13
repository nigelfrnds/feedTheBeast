import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class ProfilePage extends Component {
constructor(props) {
  super(props);
  this.state = {
    name: "",
    email: "",
    username: "",
    calories: ""
  }
 
}

 //send get request for data and add data
 componenetDidMount(){
    
}
  render() {
    return (
      <div className="container center-block">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div >
              <p>Profile</p>
            </div>
            <div className="name" controlId="name">
              <p>name:{this.state.name}</p>
            </div>
            <div className="email" controlId="email">
              <p>email:{this.state.email}</p>
            </div>
            <div className="username" controlId="username">
              <p>username:{this.state.username}</p>
            </div>
            <div className="calories" controlId="calories">
              <p>calories:{this.state.calories}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;