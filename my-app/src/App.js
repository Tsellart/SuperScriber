import React, { Component } from 'react';
import {Button, Navbar, NavItem, Footer, Table} from 'react-materialize';
import Jumbotron from './components/Jumbotron/index'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar brand='SuperScriber' right>
        <NavItem>Log-In</NavItem>
      </Navbar>
      <Jumbotron>
        <Table>
          <thead>
            <tr>
              <th data-field="id">Service</th>
              <th data-field="name">Price</th>
              <th data-field="price">Rate</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Netflix</td>
              <td>$8.00</td>
              <td>Monthly</td>
            </tr>
            <tr>
              <td>Hulu</td>
              <td>$12.00</td>
              <td>Monthly</td>
            </tr>
            <tr>
              <td>VRV</td>
              <td>$7.00</td>
              <td>Monthly</td>
            </tr>
          </tbody>
          <Button waves='light'>
            Submit
          </Button>
        </Table>
      </Jumbotron>
      <Footer copyrights="&copy 2019 Work in Progress"></Footer>
      </div>
    );
  }
}

export default App;
