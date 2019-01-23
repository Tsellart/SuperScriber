import React, { Component } from 'react';
import {Button, Navbar, NavItem} from 'react-materialize';
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
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h2 class="white-text">SuperScriber</h2>
                <p class="grey-text text-lighten-4">Where's your money going?</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="/Home">Home</a></li>
                  <li><a class="grey-text text-lighten-3" href="/Form">Sign Up</a></li>
                  <li><a class="grey-text text-lighten-3" href="/Form2">Login</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Copyright Text
            <a class="grey-text text-lighten-4 right">Tim Sella, Josh Ragon, Eki Taula</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
