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
                  <Col className="col-lg-3">                  
                    <img className="rounded-circle home-heading" src="./images/home/heading1.jpg" alt="Generic placeholder image"></img>                   
                    <h2>Mobility aids</h2>
                    <p>Wheelchars, walkers, and canes can help with walking, balancing, or supporting your loved one’s weight to reduce strain on their muscles and joints.</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                  </Col>
                  <Col className="col-lg-3">
                    <img className="rounded-circle home-heading" src="./images/home/heading2.jpg" alt="Generic placeholder image"></img>
                    <h2>Toilet and shower aids</h2>
                    <p>Raised toilet seats, shower chairs, grab bars, and handles </p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                  </Col>
                  <Col className="col-lg-3">
                    <img className="rounded-circle home-heading" src="./images/home/heading3.jpg" alt="Generic placeholder image"></img>
                    <h2>Orthopedic Supplies</h2>
                    <p>Supports, braces and guards for the body parts from the waist down: thighs, knees, limbs & ankles.</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                  </Col>
                  <Col className="col-lg-3">
                    <img className="rounded-circle home-heading" src="./images/home/heading3.jpg" alt="Generic placeholder image"></img>
                    <h2>Compression Stockings</h2>
                    <p>Maintain circulation in the leg veins and reduce leg swelling.</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                  </Col>
                </Row>
           </Container>          
           </>
        );
    }
}