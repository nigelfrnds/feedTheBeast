import React, { Component } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import STORE from './store';
import Login from "./pages/LoginPage";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {
    message: ''
  }

  componentDidMount() {
    axios.get('/api')
      .then(({ data }) => this.setState({ message: data.message }));
  }

  render() {
    return (
      <Provider store={STORE}>
        <div>
          <Router>
              <div className = "container-fluid">
                <Route path="/login" exact component = {Login} />
              </div>
          </Router> 
        </div>
      </Provider>
    );
  }
}

export default App;
