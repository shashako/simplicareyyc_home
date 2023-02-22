import React from 'react';
import { Container, Navbar, Nav, } from 'react-bootstrap';

export class  Header extends React.Component { 
    render() {
      return (
        <> 
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container >
              <Navbar.Toggle aria-controls="responsive-navbar-nav " />
              <Navbar.Brand className='ml-5'>
                      <img src="./images/logo/logo.png" width="140"/>
                </Navbar.Brand>
              <Navbar.Collapse id="responsive-navbar-nav"  className='justify-content-center expand'>
                
                <Nav>
                    <Nav.Link href="./#/home" className='mx-3' bsPrefix="navbar menu-header">HOME</Nav.Link>
                    <Nav.Link href="./#/mobility" className='mx-3' bsPrefix="navbar menu-header">MOBILITY</Nav.Link>                 
                    <Nav.Link href="./#/health" className='mx-3' bsPrefix="navbar menu-header">HEALTH</Nav.Link>
                    <Nav.Link href="./#/rental" className='mx-3' bsPrefix="navbar menu-header">RENTAL</Nav.Link>
                    <Nav.Link href="./#/contact-us" className='mx-3' bsPrefix="navbar menu-header">CONTACT US</Nav.Link>         
                </Nav>         
              </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        
      );
    }
}