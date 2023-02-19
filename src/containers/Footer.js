import React from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';

export class  Footer extends React.Component { 
    render() {
        return (
          <Navbar bg="dark" className="mt-5">    
            <Container className="text-light justify-content-md-center">  
                <Row>
                    <Col md="auto" className="mx-5">
                        <Row className="fs-4 fw-bold">Simpli Care Inc.</Row>                           
                        <Row className="px-2">#118 – 4909 17 Ave SE</Row>  
                        <Row className="px-2">Calgary, AB</Row> 
                        <Row className="px-2">Call: 403-455-8222  </Row>  
                        <Row className="px-2">Text:</Row>                     
                        <Row className="px-2">Email: hello@simplicareyyc.ca </Row>  
                        <Row className="px-2">Fax:</Row>             
                    </Col>    
                    <Col className="mx-5"></Col>   
                    <Col className="mx-5"></Col>
                    <Col className="mx-5"></Col>               
                    <Col md="auto" className="mx-5">
                        <Row className="fs-4 fw-bold">Business Hours:</Row>   
                        <Row className="px-2">Monday: 10:00 AM - 5:00 PM</Row> 
                        <Row className="px-2">Tuesdays: CLOSED</Row> 
                        <Row className="px-2">Wednesdays - Saturdays: 10:00 AM - 5:00 PM</Row>
                        <Row className="px-2">Sunday: CLOSED</Row>
                        <Row className="px-2">Stat Holiday: CLOSED</Row>                    
                    </Col>
                </Row>
            </Container>
      
         </Navbar>
        );
    }
}