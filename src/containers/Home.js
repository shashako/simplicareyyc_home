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
                        src="./images/home/banner_1.jpg"
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/home/banner_2.jpg"
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
                    <h2>Mobility</h2>
                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                  </Col>
                  <Col className="col-lg-4">
                    <img className="rounded-circle home-heading" src="./images/home/heading2.jpg" alt="Generic placeholder image"></img>
                    <h2>Health</h2>
                    <p>Another exciting bit of representative placeholder content. This time, we&ldquo;ve moved on to the second column.</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                  </Col>
                  <Col className="col-lg-4">
                    <img className="rounded-circle home-heading" src="./images/home/heading3.jpg" alt="Generic placeholder image"></img>
                    <h2>Rental</h2>
                    <p>And lastly this, the third column of representative placeholder content.</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                  </Col>
                </Row>
           </Container>          
           </>
        );
    }
}