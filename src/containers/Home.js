import React from 'react';
import {  Button, Container, Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class  Home extends React.Component { 
    render() {
        return (
        <><Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/home/banner_first.jpg"
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/home/banner_second.jpeg"
                        alt="Second slide" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>                
            </Carousel>
           <Container className = "container marketing">
                <Row>
                  <Col className="col-lg-4">                  
                    <img className="rounded-circle home-heading" src="./images/home/heading1.jpg" alt="Generic placeholder image"></img>                   
                    <h2>Custom Orthotics</h2>
                    <p>What are Custom made Orthotics? A custom orthotic is a device designed to align the foot and ankle into the most anatomically efficient position and made from an image of each foot with specific added ...</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                  </Col>
                  <Col className="col-lg-4">
                    <img className="rounded-circle home-heading" src="./images/home/heading2.jpg" alt="Generic placeholder image"></img>
                    <h2>Compression Stockings</h2>
                    <p>Compression stockings: They are a specialized hosiery, designed to help prevent the occurrence of, and guard against further progression of venous disorders such as edema, phlebitis and thrombosis. Compression ...</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                  </Col>
                  <Col className="col-lg-4">
                    <img className="rounded-circle home-heading" src="./images/home/heading3.jpg" alt="Generic placeholder image"></img>
                    <h2>Symptoms</h2>
                    <p>Achilles Tendonitis<br></br>1.What is it? Achilles Tendonitis is an inflammation of the common tendon of the gastrocnemius and soleus muscles of the posterior compartment of the leg...</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                  </Col>
                </Row>
           </Container>          
           </>
        );
    }
}