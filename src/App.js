import React, { Component } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import {ProtectedRoute} from './components/protected-route';

import './css/vendors.bundle.css';
import './css/app.bundle.css';
import './css/style.css';
import './App.css';

import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import PageNotFound from './components/page-not-found';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => {
            return(
              <Redirect to={{ pathname: '/default' }}/>
            )
          }}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <ProtectedRoute path="/default" component={DashboardPage}></ProtectedRoute>
          <Route component={PageNotFound}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;