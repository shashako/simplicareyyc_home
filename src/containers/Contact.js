import React from "react";
import { Badge, Breadcrumb, Button, Card, Col, Container, Form, Ratio, Row, FormLabel } from "react-bootstrap";

function iframe() {
    return {
        __html: `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1054.8328287617917!2d-114.06542828735995!3d51.0377713637037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371701b5a4557bd%3A0xd02de894b9ed4a94!2s118%2017%20Ave%20SE%2C%20Calgary%2C%20AB%20T2S%200A1%2C%20Canada!5e0!3m2!1sen!2s!4v1675677510992!5m2!1sen!2s" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
    }
}
export class  Contact extends React.Component { 
    render() {        
        return (
        <>    
        
        <Container className="mt-4 lead">           
            <Row>
            <Col>
                <Row>                
                    <h2>Contact</h2>
                </Row>
                <Form.Group className="mb-3" controlId="contactName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted"> We&lsquo;ll never share your email with anyone else.                   
                    </Form.Text>
                </Form.Group> 
                <Form.Group className="mb-3" controlId="contactPhone">
                    <Form.Label>Your phone number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" aria-label="With textarea"/>
                </Form.Group>
                <Button variant="Primary">Book an appointment</Button>{' '}            
            </Col>            
            <Col className="mt-4 " sm={7} md={7} height="100%">
                <Card >            
                <div dangerouslySetInnerHTML={iframe()} />
                <Card.Body>                
                    <Card.Title>Simpli Care Inc.</Card.Title>
                    <Card.Text>#118 – 4909 17 Ave SE<br/>Calgary, AB<br/>Call: 403-455-8222</Card.Text>                                
                </Card.Body>
                </Card>
            </Col>
            </Row>
                 
       
        </Container> 
       
        </>    
        )
    }
}