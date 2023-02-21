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
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/home/banner_2.jpg"
                        alt="Second slide" />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>                
            </Carousel>

           <Container className = "container marketing">
              <Row>
                    <Col>
                    <p>Simpli Care provides a variety of assistive products with professional consultation to improve your health and wellness:</p>
                    <ul>
                            <li><b>Mobility aids:</b> Wheelchars, walkers, and canes can help with walking, balancing, or supporting your loved one&lsquo;s weight to reduce strain on their muscles and joints.</li>
                            <li><b>Toilet and shower aids:</b> Raised toilet seats, shower chairs, grab bars, and handles</li>
                            <li><b>Orthopedic Supplies:</b> Supports, braces and guards for the body parts from the waist down: thighs, knees, limbs & ankles.</li>
                            <li><b>Compression Stockings:</b> Maintain circulation in the leg veins and reduce leg swelling</li>
                    </ul>                
                </Col>
              </Row>
              <Row>
                  <Col className="mb-4 mx-2 box-shadow">                  
                    <img className="card-img-top mt-4" src="./images/home/heading_1.jpg" alt="Generic placeholder image"></img>
                    <div className="card-body">                  
                      <h4>Mobility aids</h4>
                      <p>Wheelchars, walkers, and canes can help with walking, balancing, or supporting your loved one’s weight to reduce strain on their muscles and joints.</p>
                    <p><Button className="btn-secondary" href="./#/mobility" role="button">View details &raquo;</Button></p>
                    </div> 
                  </Col>
                  <Col className=" mb-4 mx-2 box-shadow">                  
                    <img className="card-img-top  mt-4" src="./images/home/heading_2.jpg" alt="Generic placeholder image"></img>
                    <div className="card-body">                  
                      <h4>Toilet and shower aids</h4>
                      <p>Raised toilet seats, shower chairs, grab bars, and handles</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                    </div> 
                  </Col>
                  <Col className=" mb-4 mx-2 box-shadow">                  
                    <img className="card-img-top mt-4" src="./images/home/heading_3.jpg" alt="Generic placeholder image"></img>
                    <div className="card-body">                  
                      <h4>Orthopedic Supplies:</h4>
                      <p>Supports, braces and guards for the body parts from the waist down: thighs, knees, limbs & ankles</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                    </div> 
                  </Col>
                  <Col className=" mb-4 mx-2 box-shadow">                  
                    <img className="card-img-top mt-4" src="./images/home/heading_4.jpg" alt="Generic placeholder image"></img>
                    <div className="card-body">                  
                      <h4>Compression Stockings</h4>
                      <p>Maintain circulation in the leg veins and reduce leg swelling</p>
                    <p><Button className="btn-secondary" href="#" role="button">View details &raquo;</Button></p>
                    </div> 
                  </Col>
                </Row>
                <Row>
                <p>Inquire about products and we&lsquo;ll be happy to provide more information, recommendation and assistance about products that will help you attain a better quality of living. </p>
              </Row>
           </Container>          
           </>
        );
    }
}