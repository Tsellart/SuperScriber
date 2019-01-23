import React, { Component } from "react";
import Jumbotron from "../Jumbotron/index";
import Input from "../Input/index";
import Button from "../Button/index";
import API from "./utils/API";
import { SubList, SubListItem } from "../SubList";
import {Navbar, NavItem, Footer} from 'react-materialize';

import { Container, Row, Col } from "../Grid/index";

class App extends Component {
  state = {
    Subscriptions: [],
    service: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
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
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col size="md-12">
                            <form>
                                <Container>
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
                                        Search
                                    </Button>
                                </Col>
                                </Row>
                                </Container>
                            </form>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="xs-12">
                            {!this.state.service.length ? (
                                <h1 className="text-center">No Recipes to Display</h1>
                            ) : (
                                <RecipeList>
                                {this.state.recipes.map(recipe => {
                                    return (
                                    <RecipeListItem
                                        key={recipe.title}
                                        title={recipe.title}
                                        href={recipe.href}
                                        ingredients={recipe.ingredients}
                                        thumbnail={recipe.thumbnail}
                                    />
                                    );
                                })}
                                </RecipeList>
                            )}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </Navbar>
        </div>
    );
  }
}

export default App;