import React from "react";
import { Container, Form, Ratio, Row } from "react-bootstrap";
import { Footer } from "./Footer";
import { Header } from "./Header";

export class  Contact extends React.Component { 
    render() {
        return (
        <><Header />

        <Container className="">
            <Row className="fs-3"> Please make your appointment request at 403-455-9906.<br/> </Row>  
            <Row> <br/> </Row>         
            <Row className="fs-3"> Find us at:<br/>Adress <br/> City  </Row>  
            <Row>

   
            </Row>
        </Container>
        
        <Footer /></>
        )
    }
}