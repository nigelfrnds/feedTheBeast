import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Welcome extends Component {

  render() {
    return (
    <div>
      <div >
        <h1>Welcome to Feed The Beast</h1>
      </div>
      <div>
          <p>Make you weekly meal plan</p>
      </div>
      <div>
      <Link to ="/login" className="btn btn-primary">Login</Link>
      </div>
      <div>
      <Link to ="/register" className="btn btn-primary">Register</Link>
      </div>
    </div>
    );
  }
}

export default Welcome;