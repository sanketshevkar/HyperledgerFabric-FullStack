import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { Nav } from 'react-bootstrap';


export class Navi extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">FabCar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/changeOwner">Change Owner</Nav.Link>
          <Nav.Link href="/addCar">Add Car</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}



export default Navi;