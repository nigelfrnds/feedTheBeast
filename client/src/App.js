import React, { Component } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import STORE from './store';
import { Account, Main } from "./pages/";

import Login from "./pages/LoginPage";
import Card from './pages/Card';

import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Provider store={STORE}>
        <div>
          <Router>
            <div>
              <NavBar />
              <div className = "container-fluid" style={{ marginTop: "5rem" }}>
                  <Route path="/login" exact component={Login} />
                  <Route path="/main" exact component={Main} />
                  <Route path="/account" exact component={Account} />
                  <Route path="/card" exact component={Card} />
              </div>
            </div>
          </Router> 
        </div>
      </Provider>
    );
  }
}

export default App;
