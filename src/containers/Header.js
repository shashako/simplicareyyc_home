import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export class  Header extends React.Component { 
    render() {
        return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Custom Orthotics</Nav.Link>
            <Nav.Link href="#link">Compression Stockings</Nav.Link>
            <Nav.Link href="#link">Symptoms</Nav.Link>
            <Nav.Link href="#link">Our Specialist</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">Location & Contact</Nav.Link>
            <Nav.Link href="#link">Mattresses</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
    }
}