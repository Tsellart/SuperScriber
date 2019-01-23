import React from 'react';
import {Navbar} from 'react-materialize';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Pages/Home';
import Subscriptions from './components/Pages/Subscriptions';
import FormTwo from './components/Pages/Form2';


function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/Subscriptions" component={Subscriptions} />
          <Route exact path = "/Form" component={FormTwo} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
