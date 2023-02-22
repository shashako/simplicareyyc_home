import React from 'react';
import {  Container, Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class  Home extends React.Component { 
    render() {     
      const heading1 = <Col className="card mb-4 mx-2 box-shadow home-box">                  
                          <img className="card-img-top mt-4" src="./images/home/heading_1.jpg" alt="Generic placeholder image"></img>
                          <div className="card-body">                  
                            <h4>Mobility aids</h4>
                            <p>Wheelchars, walkers, and canes can help with walking, balancing, or supporting your loved one’s weight to reduce strain on their muscles and joints.</p>
                            <p><a type="button" href="./#/mobility" className="btn btn-outline-success">View details &raquo;</a></p>
                          </div> 
                       </Col>
      const heading2 = <Col className="card mb-4 mx-2 box-shadow home-box">                  
                          <img className="card-img-top  mt-4" src="./images/home/heading_2.jpg" alt="Generic placeholder image"></img>
                          <div className="card-body">                  
                            <h4>Toilet and shower aids</h4>
                            <p>Raised toilet seats, shower chairs, grab bars, and handles.</p>
                            <p><a type="button" href="./#/mobility" className="btn btn-outline-success">View details &raquo;</a></p>
                          </div>
                        </Col> 
      const heading3 = <Col className="card mb-4 mx-2 box-shadow home-box">                  
                        <img className="card-img-top mt-4" src="./images/home/heading_3.jpg" alt="Generic placeholder image"></img>
                        <div className="card-body">                  
                          <h4>Orthopedic Supplies:</h4>
                          <p>Supports, braces and guards for the body parts from the waist down: thighs, knees, limbs & ankles.</p>
                          <p><a type="button" href="./#/health" className="btn btn-outline-success">View details &raquo;</a></p>
                        </div> 
                      </Col>
      const heading4 = <Col className="card mb-4 mx-2 box-shadow home-box">                  
                        <img className="card-img-top mt-4" src="./images/home/heading_4.jpg" alt="Generic placeholder image"></img>
                        <div className="card-body">                  
                          <h4>Compression Stockings</h4>
                          <p>Maintain circulation in the leg veins and reduce leg swelling</p>                      
                          <p><a type="button" href="./#/health" className="btn btn-outline-success">View details &raquo;</a></p>
                        </div>
                        
                      </Col>
        return (
        <>
          <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="./images/home/banner_1.jpg"/>                    
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="./images/home/banner_2.jpg"/>
                </Carousel.Item>                
          </Carousel>

          <Container className = "container">
            <Row>
              <Col>
                <p className='fs-4'>Simpli Care provides a variety of assistive products with professional consultation to improve your health and wellness:</p>
                <ul>
                        <li><b>Mobility aids:</b> Wheelchars, walkers, and canes can help with walking, balancing, or supporting your loved one&lsquo;s weight to reduce strain on their muscles and joints.</li>
                        <li><b>Toilet and shower aids:</b> Raised toilet seats, shower chairs, grab bars, and handles.</li>
                        <li><b>Orthopedic Supplies:</b> Supports, braces and guards for the body parts from the waist down: thighs, knees, limbs & ankles.</li>
                        <li><b>Compression Stockings:</b> Maintain circulation in the leg veins and reduce leg swelling.</li>
                </ul>                
              </Col>
            </Row>
            <Row>
              {heading1}
              {heading2}
              {heading3} 
              {heading4}
            </Row>
            <Row>                
                <p className='fs-5'>Inquire about products and we&lsquo;ll be happy to provide more information, recommendation and assistance about products that will help you attain a better quality of living. </p>
            </Row>              
           </Container>          
           </>
        );
    }
}