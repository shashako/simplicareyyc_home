import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';

export class  Footer extends React.Component { 
    render() {
        return (
          <Navbar bg="dark">    
      <Container className="text-light">  
      
        <Col>
            <Row className="fs-3 fw-bold">Company Name</Row>   
            <Row className="">Adress 1</Row> 
            <Row className="">Calgary</Row>  
            <Row className="">Phone: xxx</Row> 
            <Row className="">Fax: xxx  </Row>   
            <Row className="">Email: xxx  </Row>              
        </Col>
        <Col>
            <Row className="fs-4 fw-bold">Office Hours:</Row>   
            <Row className="">Monday - Friday: 10:00 AM - 6:00 PM</Row> 
            <Row className="">Saturday: 10:00 AM - 5:00 PM</Row> 
            <Row className=""> Sunday: Closed</Row>
            <Row className=""> </Row>
            <Row className=""> </Row>
        </Col>
       
      </Container>
      
      </Navbar>
        );
    }
}