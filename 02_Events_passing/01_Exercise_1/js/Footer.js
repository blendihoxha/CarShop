 import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p>We are a car dealership based in Drenic, offering a wide range of vehicles at competitive prices. Our goal is to provide our customers with a hassle-free car buying experience.</p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <ul className='list-unstyled'>
              <li>Phone:049-601-123</li>
              <li>Email: info@carsales.com</li>
              <li>Address: Drenic</li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Our Services</h4>
            <ul className='list-unstyled'>
              <li>New and used car sales</li>
              <li>Vehicle financing</li>
              <li>Trade-ins</li>
              <li>Vehicle maintenance and repairs</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-muted'>© 2023 CarSales, Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
