import React, { Component } from 'react';
import {Button, Navbar, NavItem, Footer, Table} from 'react-materialize';
import Jumbotron from '../Jumbotron/index'
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid/index";



class Subscriptions extends Component {
  render() {
    return (
      <div className="App">
      <Navbar brand='SuperScriber' right>
        <NavItem><Link to = {'/home'}>Log-Out</Link></NavItem>
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

          <Row>
            
          </Row>

         
        
        </Table>
      </Jumbotron>
      <Footer className = "text-center" copyrights="&copy 2019 Work in Progress"></Footer>
      </div>
    );
  }
}

export default Subscriptions;
