import React from "react";
import { Badge, Breadcrumb, Button, Card, Col, Container, Form, Ratio, Row, FormLabel, Table } from "react-bootstrap";

export class  Mobility extends React.Component { 
    render() {        
        return (
        <>    
        <Container className="mt-5">
            <Row>                
                <h2 className="featurette-heading">Transport Wheelchairs</h2>
            </Row>
            <Row>
                <Col className="mx-4">                
                    <p className="lead">This chair comes equipped with loop-lock handbrakes that are easy to operate and ideal for locking the rear wheels during transfers. It is compact when folded, making it easy to lift into a car or carry up the stairs. Weighs just 37 pounds and is equipped with a comfortable nylon upholstery, full length permanent armrest, and detachable footrests.</p>
                </Col>
                <Col  sm={1} md={1}></Col>
                <Col sm={4} md={4}>
                    <img className="featurette-image img-fluid mx-auto" src="./images/mobility/transport_wheelchairs.jpg" alt="Generic placeholder image"></img>  
                </Col>       
                <Col  sm={1} md={1}></Col>       
            </Row>
            <Row  className="mt-5">
                <h2 className="featurette-heading">Walking Aids</h2>
            </Row>
            <Row className="mt-5" >
                <Col sm={1} md={1}></Col>
                <Col sm={4} md={4}>
                    <img className="featurette-image img-fluid mx-auto" src="./images/mobility/walking_aids.jpg" alt="Generic placeholder image"></img>  
                </Col> 
                <Col  sm={1} md={1}></Col>
                <Col  sm={6} md={6}>
                <p className="lead">If you’re seeking a safe, convenient aid to improve your daily mobility, this Rollator can be the ideal solution. This Four Wheel Walker Rollator provides reliable support with maximum comfort, and is ideal for active lifestyles while traveling over uneven or outdoor terrain. The Four Wheel Walker features a built-in padded seat with backrest for convenient resting, a removable basket for carrying personal items, and non-marking wheels that won’t leave scuffs. The handle height is easily adjustable to support optimal posture while walking, and the deluxe loop locks ensure advanced safety. Transportation and storage of the Four Wheel Walker Rollator is simple with a backrest that can be folded.</p>
                </Col>                
            </Row>
            <Row className="mt-5">
                <h2 className="featurette-heading">Walking Sticks</h2>
            </Row>
            <Row className="mt-5 mx-4">
                <img className="featurette-image img-fluid mx-auto" src="./images/mobility/walking_sticks.jpg" alt="Generic placeholder image"></img>  
            </Row>
        </Container> 

        </>    
        )
    }
}