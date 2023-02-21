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
         <div className="fixed-bottom">
            <a href="tel:403-455-8222">
            <div className="content-center">
                <div className="pulse">

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>                
                </div>                      
            </div>    
            </a>        
            </div>
         </>
        );
    }
}