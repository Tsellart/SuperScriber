import React, { Component } from 'react';
import {Navbar, NavItem, Table, Footer} from 'react-materialize';
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
      <Footer className = "text-center" copyrights="2019 Work in Progress"></Footer>
      </div>
    );
  }
}

export default Subscriptions;
