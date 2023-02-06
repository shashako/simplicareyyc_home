import React from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';

export class  Footer extends React.Component { 
    render() {
        return (
          <Navbar bg="dark">    
            <Container className="text-light justify-content-md-center">  
                <Row>
                    <Col md="auto" className="mx-5">
                        <Row className="fs-4 fw-bold">Simpli Care Inc.</Row>                           
                        <Row className="fs-6">#118 – 4909 17 Ave SE</Row>  
                        <Row className="fs-6">Calgary, AB</Row> 
                        <Row className="">Call: 403-455-8222  </Row>  
                        <Row className="">Text:</Row>                     
                        <Row className="">Email: hello@simplicareyyc.ca </Row>  
                        <Row className="">Fax:</Row>             
                    </Col>    
                    <Col className="mx-5"></Col>   
                    <Col className="mx-5"></Col>
                    <Col className="mx-5"></Col>               
                    <Col md="auto" className="mx-5">
                        <Row className="fs-4 fw-bold">Business Hours:</Row>   
                        <Row className="">Monday: 10:00 AM - 5:00 PM</Row> 
                        <Row className="">Tuesdays: CLOSED</Row> 
                        <Row className="">Wednesdays - Saturdays: 10:00 AM - 5:00 PM</Row>
                        <Row className="">Sunday: CLOSED</Row>
                        <Row className="">Stat Holiday: CLOSED</Row>                    
                    </Col>
                </Row>
            </Container>
      
         </Navbar>
        );
    }
}