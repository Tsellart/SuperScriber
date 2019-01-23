import React, { Component } from 'react';
import {Navbar, NavItem, Footer, Table} from 'react-materialize';
import Jumbotron from '../Jumbotron/index'
import { Link } from "react-router-dom";




class Subscriptions extends Component {
  render() {
    return (
      <div className="App">
      <Navbar brand='SuperScriber' right>
        <NavItem><Link to = {'/home'}>Log-Out</Link></NavItem>
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
      <Footer className = "text-center" copyrights="&copy 2019 Work in Progress"></Footer>
      </div>
    );
  }
}

export default Subscriptions;
