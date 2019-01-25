import React, { Component } from 'react';
import {Button, Row, Input, Navbar, NavItem} from 'react-materialize';
import Jumbotron from '../Jumbotron/index'
import { Link } from "react-router-dom";



class Formie extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand='SuperScriber' right>
            <NavItem>
                <Link to = {'/Home'}>Sign-Out</Link>
            </NavItem>
        </Navbar>
        <Jumbotron>
            <Row>
              <Input s={6} label="Username" />
              <Input s={6} label="Password" />
            </Row>
            <Row>
              <Input s={12} label="Service" />
            </Row>
            <Row>
              <Input s={12} label="Price" />
            </Row>
            <Row>
              <Input s={12} label="Rate" />
            </Row>

            <Button waves='light'>
              Submit
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
                  <li><Link class="grey-text text-lighten-3" to = {'/Home'}>Home</Link></li>
                  <li><Link class="grey-text text-lighten-3" to = {'/Form2'}>Add Subscriptions</Link></li>
                  <li><Link class="grey-text text-lighten-3" to = {'/Subscriptions'}>Subscriptions</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Copyright Text
            <p class="grey-text text-lighten-4 right">Tim Sella, Josh Ragon, Eki Taula</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Formie;
