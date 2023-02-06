import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export class  Header extends React.Component { 
    render() {
        return (
    <Navbar bg="dark" variant="dark" expand="lg" className="">
      <Container className="">        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="">
          <Navbar.Brand >
        <img
          src="./images/logo/logo.png"
            width="140"       
        />
        </Navbar.Brand>
            <Nav.Link href="./#/home" className=' mx-3'><a className="menu-header">HOME</a></Nav.Link>
            <Nav.Link href="./#/mobility" className=' mx-3'><a className="menu-header">MOBILITY</a></Nav.Link>
            <Nav.Link href="./#/health" className=' mx-3'><a className="menu-header">HEALTH</a></Nav.Link>
            <Nav.Link href="./#/rentail" className=' mx-3'><a className="menu-header">RENTAL</a></Nav.Link>
            <Nav.Link href="./#/contact-us" className=' mx-3'><a className="menu-header">CONTACT US</a></Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
    }
}