import React from "react";
import { Col, Container,  Row, Table } from "react-bootstrap";

export class  Rental extends React.Component { 
    render() {        
        return (
        <>    
        {/* <Container className="d-flex align-items-center flex-column w-50 mt-5"> */}
        <Container className="mt-4 lead">
            <Row>                
                <h2>Rental</h2>
            </Row>
            <Row>
            <Col className="mx-4">
                <p>Need to rent wheelchair, walker or roller while traveling in Alberta? Simpli Care provides a mobility aids rental service within the area, please check our quotation below. Please note that one-time cleaning fee after renting is mandatory and only charged once per rental.</p>
            </Col>
            </Row>
            <Table striped bordered hover size="sm" className="w-50 mx-5" >
                <thead>
                    <tr >
                    <th>Product</th>
                    <th>Daily </th>
                    <th>Weekly</th>
                    <th>One time cleaning fees</th>
                    <th>Deposit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Wheelchair</td>
                    <td>$10</td>
                    <td>$40</td>
                    <td>$10</td>
                    <td>$100</td>
                    </tr>
                    <tr>
                    <td>Transport Wheelchair</td>
                    <td>$10</td>
                    <td>$40</td>
                    <td>$10</td>
                    <td>$100</td>
                    </tr>
                    <tr>
                    <td>Rollator Waker</td>
                    <td>$10</td>
                    <td>$40</td>
                    <td>$10</td>
                    <td>$100</td>
                    </tr>
                </tbody>
            </Table>
            <Row>
            <Col className="mx-4">
                <p>Delivery Pick-up available upon request
                <br></br>Deposits will be refunded upon return of equipment without damage or missing components
                </p>                
            </Col>
            </Row>         
        </Container> 
       
        </>    
        )
    }
}