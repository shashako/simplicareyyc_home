import React from "react";
import { Container, Row } from "react-bootstrap";

function iframe() {
    return {
        __html: `
    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7866.040192265814!2d105.5723145!3d9.6793236!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1675613848869!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
    }
}
export class  Contact extends React.Component { 
    render() {        
        return (
        <>
        <Container className="">
            <Row className="fs-3"> Please make your appointment request at 403-455-xxxx.<br/> </Row>  
            <Row> <br/> </Row>         
            <Row className="fs-3"> Find us at:<br/>Adress <br/> City  </Row>  
            <Row>
              <div dangerouslySetInnerHTML={iframe()} />   
            </Row>
        </Container>      
        </>    
        )
    }
}