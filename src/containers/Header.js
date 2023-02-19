import React from 'react';
import { Container, Navbar, Nav, Offcanvas, } from 'react-bootstrap';

export class  Header extends React.Component { 
    render() {
      return (
        <>          
          <Navbar bg="dark" variant="dark" expand="sm">
            <Container  bg="dark" variant="dark">

              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`}/>
              <Navbar.Offcanvas                            
                aria-labelledby={`offcanvasNavbarLabel-expand-sm`}                                            
              >
                <Offcanvas.Header closeButton >
                  <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="justify-content-center">
                  <Navbar.Brand>
                    <img src="./images/logo/logo.png" width="140"/>
                  </Navbar.Brand>
                  <Nav>
                  <Nav.Link href="./#/home" className=' mx-3' bsPrefix="navbar menu-header">HOME</Nav.Link>
                  <Nav.Link href="./#/mobility" className=' mx-3'><a className="menu-header">MOBILITY</a></Nav.Link>
                  {/* <NavDropdown
                    title="MOBILITY"
                    id={`offcanvasNavbarDropdown-expand-sm`} 
                    bsPrefix="navbar menu-header"
                    className='mx-3'
                  >
                    <NavDropdown.Item href="#action3">Wheelchairs</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Walking Aids</NavDropdown.Item>                      
                  </NavDropdown> */}
                  {/* <NavDropdown
                    title="HEALTH"
                    id={`offcanvasNavbarDropdown-expand-sm`} 
                    bsPrefix="navbar menu-header"
                    className='mx-3'
                  >
                    <NavDropdown.Item href="#action3">Orthopedic Supports</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Compression Stockings</NavDropdown.Item> 
                    <NavDropdown.Item href="#action4">Personal Care</NavDropdown.Item>                     
                  </NavDropdown> */}
                  <Nav.Link href="./#/health" className='mx-3' bsPrefix="navbar menu-header">HEALTH</Nav.Link>
                  <Nav.Link href="./#/rentail" className='mx-3' bsPrefix="navbar menu-header">RENTAL</Nav.Link>
                  <Nav.Link href="./#/contact-us" className='mx-3' bsPrefix="navbar menu-header">CONTACT US</Nav.Link>
                  </Nav>                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          
        </>
      );
    }
}