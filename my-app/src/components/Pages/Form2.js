import React, { Component } from "react";
import Jumbotron from "../Jumbotron/index";
import Input from "../Input/index";
import Button from "../Button/index";
import API from "../Util/API";
import {Navbar, NavItem, Footer} from 'react-materialize';
import { Container, Row, Col } from "../Grid/index";
import { Link } from "react-router-dom";


class FormTwo extends Component {
  state = {
    Subscriptions: [],
    service: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getSubs(this.state.service)
      .then(res => this.setState({ service: res.data }))
      .catch(err => console.log(err));
    };

  render() {
    return (
        <div>
            <Navbar brand='SuperScriber' right>
                <NavItem>
                    <Link to = {'/Home'}>Sign-Out</Link>
                </NavItem>
            </Navbar>
            <Jumbotron>
                <Container>
                    <h1>Enter your Subscriptions!</h1>
                    <form>
                        <Row>
                            <Col size="xs-9 sm-10">
                            <Input
                                name="service"
                                value={this.state.service}
                                onChange={this.handleInputChange}
                                placeholder="Service"
                            />
                            </Col>
                            <Col size="xs-9 sm-10">
                            <Input
                                name="price"
                                value={this.state.price}
                                onChange={this.handleInputChange}
                                placeholder="Price"
                            />
                            </Col>
                            <Col size="xs-9 sm-10">
                            <Input
                                name="rate"
                                value={this.state.rate}
                                onChange={this.handleInputChange}
                                placeholder="Rate"
                            />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="xs-3 sm-2">
                                <Button
                                    onClick={this.handleFormSubmit}
                                    type="success"
                                    className="input-lg"
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Container>
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
                  <li><Link class="grey-text text-lighten-3" to = {'/Subscriptions'}>Subscriptions</Link></li>
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

export default FormTwo;