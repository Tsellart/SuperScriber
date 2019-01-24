import React, { Component } from 'react';
import {Button, Navbar, NavItem, Footer} from 'react-materialize';
import Jumbotron from '../Jumbotron/index'
import { Link } from "react-router-dom";
import './style.css';



class Home extends Component {
  render() {
    return (
      <div className="App">
      <Navbar brand='SuperScriber' right>
        <NavItem>
          <Link to = {'/Subscriptions'}>Log-In</Link>
        </NavItem>
      </Navbar>
      <Jumbotron>
        
        <h2>a subscription tracker designed to calculate monthly
expenditures and remind users of when payments are due. It is valuable
as a tool to follow financial output and as a visual aid to show
where money is going.</h2>
      
        <Button waves='light'>
          <Link to = {'/Form'}>Sign Up</Link>
        </Button>
        
      </Jumbotron>
      <Footer className = "text-center" copyrights="2019 Work in Progress"></Footer>
      </div>
    );
  }
}

export default Home;
