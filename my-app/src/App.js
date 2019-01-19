import React, { Component } from 'react';
import {Navbar} from 'react-materialize';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Pages/Home';
import Subscriptions from './components/Pages/Subscriptions';


function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path = "/home" component={Home} />
          <Route exact path = "/Subscriptions" component={Subscriptions} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
