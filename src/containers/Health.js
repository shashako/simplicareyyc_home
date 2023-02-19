import React from "react";
import { Badge, Breadcrumb, Button, Card, Col, Container, Form, Ratio, Row, FormLabel, Table, Carousel } from "react-bootstrap";

export class  Health extends React.Component { 
    render() {        
        return (
        <>    
        <Container>
            <Row className="mt-4">                
                <h2 className="featurette-heading">Orthopedic Supports</h2>
            </Row>
            <Row>
                <Col className="mx-4">                
                    <p >An orthopedic support is often a key tool in recovery from injury or after an operation. Our Orthopedic supports come in different types, designed for various parts of the body to ensure that clients will experience comfortable fit and material.</p>
                    <ul>
                        <li>Back support</li>
                        <li>Elbow support</li>
                        <li>Wrist support</li>
                        <li>Ankle support</li>
                        <li>Knee support</li>
                    </ul>
                </Col>                     
            </Row>
            <Row className="mt-4">                
                <h2 className="featurette-heading">Compression Stockings</h2>
            </Row>
            <Row>
                <Col className="mx-4">                
                    <p>Compression stockings are specially designed to apply pressure to your lower legs, helping to preserve blood flow and reduce discomfort and swelling.</p>
                    <p>Available in the Following Compressions:</p>
                    <ul>
                        <li>10-15mmHg</li>
                        <li>20-30mmHg </li>
                        <li>30-40mmHg </li>                        
                    </ul>
                    <p>With variety of lengths:</p>
                    <ul>
                        <li>Knee High</li>
                        <li>Thigh High</li>
                        <li>Panty Hose</li>                        
                    </ul>
                </Col>                     
            </Row>   
            <Row className="mt-4">                
                <h2 className="featurette-heading">Personal Care</h2>
            </Row>
            <Row>
                <Col className="mx-4">                
                    <p>If you are suffering from upper-part muscle pains, try our head, neck and shoulder massagers with heat to relax and relieve sore after a long workday. We promise to bring you comfort and relaxation with our quality products</p>
                    <ul>
                        <li>Foot & Muscle Massagers</li>
                        <li>Elevation Bed Wedge</li>                                          
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col sm={1} md={1}></Col>
                <Col>
                    <h2 className="featurette-heading">Foot & Muscle Massagers</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./images/health/massagers_1.jpg"
                                alt="First slide" />                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./images/health/massagers_2.jpg"
                                alt="Second slide" />
                        </Carousel.Item>                
                    </Carousel>
                    
                </Col>
                <Col sm={1} md={1}></Col>
                <Col>
                    <h2 className="featurette-heading">Elevation Bed Wedge</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./images/health/wedge_1.jpg"
                                alt="First slide" />                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./images/health/wedge_2.jpg"
                                alt="Second slide" />                            
                        </Carousel.Item>                
                    </Carousel>                    
                </Col>
                <Col sm={1} md={1}></Col>  
            </Row>
                    
        </Container> 

        </>    
        )
    }
}