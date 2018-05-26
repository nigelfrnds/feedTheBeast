import React, { Component } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import STORE from './store';

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import WelcomePage from "./pages/WelcomePage";

import NavBar from './components/NavBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={STORE}>
        <div>
          <Router>
            <div>
              <NavBar />
              <div className = "container-fluid" style={{ marginTop: "7rem" }}>
                <Route path="/" exact component={WelcomePage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/main" exact component={DashboardPage} />
              </div>
            </div>
          </Router> 
        </div>
      </Provider>
    );
  }
}

export default App;
