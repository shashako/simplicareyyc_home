import React from "react";
import { Badge, Breadcrumb, Button, Card, Col, Container, Form, Ratio, Row, FormLabel, Table } from "react-bootstrap";

export class  Rentail extends React.Component { 
    render() {        
        return (
        <>    
        {/* <Container className="d-flex align-items-center flex-column w-50 mt-5"> */}
        <Container className="mt-4">
            <Row>                
                <h2 className="featurette-heading">Rentail</h2>
            </Row>
            <Row>
                <p>Need to rent wheelchair, walker or roller while traveling in Alberta? Simpli Care provides a mobility aids rental service within the area, please check our quotation below. Please note that one-time cleaning fee after renting is mandatory and only charged once per rental.</p>
            </Row>
            <Table striped bordered hover size="sm" className="w-50" >
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
                    <td>Walker</td>
                    <td>$10</td>
                    <td>$40</td>
                    <td>$10</td>
                    <td>$100</td>
                    </tr>
                    <tr>
                    <td>Roller</td>
                    <td>$10</td>
                    <td>$40</td>
                    <td>$10</td>
                    <td>$100</td>
                    </tr>
                </tbody>
            </Table>
            <Row>
                <p>Delivery Pick-up available upon request</p>
            </Row>
            <Row>
                <p>Deposits will be refunded upon return of equipment without damage or missing components</p>
            </Row>           
        </Container> 
       
        </>    
        )
    }
}