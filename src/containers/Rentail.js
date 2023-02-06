import React from "react";
import { Badge, Breadcrumb, Button, Card, Col, Container, Form, Ratio, Row, FormLabel, Table } from "react-bootstrap";

export class  Rentail extends React.Component { 
    render() {        
        return (
        <>    
        <Container className="d-flex align-items-center flex-column w-50 mt-5">
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
           
            <FormLabel> <br></br>Delivery/Pick-up available upon request<br></br>
Deposits will be refunded upon return of equipment without damage or missing components
</FormLabel>
        </Container> 
       
        </>    
        )
    }
}