import React from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';

export class  Footer extends React.Component { 
    render() {
        return (
            <>
          <Navbar bg="dark" className="mt-5">    
            <Container className="text-light justify-content-md-center">  
                <Row>
                    <Col md="auto" className="mx-5">
                        <Row className="fs-4 fw-bold">Simpli Care Inc.</Row>                           
                        <Row className="px-2">#118 – 4909 17 Ave SE</Row>  
                        <Row className="px-2">Calgary, AB</Row> 
                        <Row className="px-2">Call: 403-455-8222</Row>  
                        <Row className="px-2">Text: 587-585-7155</Row>                     
                        <Row className="px-2">Email: hello@simplicareyyc.ca </Row>  
                        <Row className="px-2">Fax: 888-296-7978</Row>             
                    </Col>    
                    <Col className="mx-5"></Col>   
                    <Col className="mx-5"></Col>
                    <Col className="mx-5"></Col>               
                    <Col md="auto" className="mx-5">
                        <Row className="fs-4 fw-bold">Business Hours:</Row>   
                        <Row className="px-2">Mon: 9:30-5</Row> 
                        <Row className="px-2">Tue: 9:30-5</Row> 
                        <Row className="px-2">Wed: 9:30-5</Row>
                        <Row className="px-2">Thu: CLOSED</Row>
                        <Row className="px-2">Fri: 9:30-5</Row>  
                        <Row className="px-2">Sat: 10-5</Row>  
                        <Row className="px-2">Sun: CLOSED</Row>
                        <Row className="px-2">Statutory Holidays: CLOSED</Row>                
                    </Col>
                </Row>                
            </Container>
      
         </Navbar>
        
         </>
        );
    }
}