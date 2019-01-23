import React, { Component } from 'react';
import {Navbar, NavItem, Table} from 'react-materialize';
import Jumbotron from '../Jumbotron/index';
import { Link } from "react-router-dom";




class Subscriptions extends Component {
  render() {
    return (
      <div className="App">
      <Navbar brand='SuperScriber' right>
        <NavItem><Link to = {'/Home'}>Log-Out</Link></NavItem>
      </Navbar>
      <Jumbotron>
        <Table className = "striped centered">
          <thead>
            <tr>
              <th data-field="id">Service</th>
              <th data-field="name">Price</th>
              <th data-field="price">Rate</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                Netflix
              </td>
              <td>
                12.00
              </td>
              <td>
                Monthly
              </td>
            </tr>
          </tbody>       
        </Table>
        <Table className="centered">
        <thead>
          <tr>
            <th data-field="Cost">
              Monthly Expense
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              $42.00
            </td>
          </tr>
        </tbody>
        </Table>
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

export default Subscriptions;
