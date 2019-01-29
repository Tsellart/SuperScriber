import React, { Component } from 'react';
import {Navbar, NavItem, Table} from 'react-materialize';
import Jumbotron from '../Jumbotron/index';
import { Link } from "react-router-dom";
import API from "../Util/API";
import { SubList, SubListItem } from "../SubList/index";




class Subscriptions extends Component {

  state = {
    Subscription: []
  };

  loadSubs = () => {
    API.getSubs()
    .then(res => this.setState({ subs: res.data }))
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
      <Navbar brand='SuperScriber' right>
      <NavItem>
        <Link to = {'/Form'}>Manage Subscriptions</Link>
      </NavItem>
      <NavItem>
        <Link to = {'/home'}>Log-Out</Link>
      </NavItem>
      </Navbar>
      <Jumbotron>
        <SubList>
          <SubListItem>
          </SubListItem>
        </SubList>
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
                  <li><Link class="grey-text text-lighten-3" to = {'/Home'}>Home</Link></li>
                  <li><Link class="grey-text text-lighten-3" to = {'/Form2'}>Add Subscriptions</Link></li>
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

export default Subscriptions;
