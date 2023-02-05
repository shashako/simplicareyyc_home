import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export class  Header extends React.Component { 
    render() {
        return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >
        <img
          src="./images/logo/logo.png"
            width="140"       
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className='mx-3'><a className="menu-header">HOME</a></Nav.Link>
            <Nav.Link href="/" className='mx-3'><a className="menu-header">CUSTOM ORTHOTICS</a></Nav.Link>
            <Nav.Link href="/" className='mx-3'><a className="menu-header">COMPRESSION STOCKINGS</a></Nav.Link>
            <Nav.Link href="/" className='mx-3'><a className="menu-header">SYMPTOMS</a></Nav.Link>
            <Nav.Link href="/contact-us" className=' mx-3'><a className="menu-header">CONTACT</a></Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
    }
}