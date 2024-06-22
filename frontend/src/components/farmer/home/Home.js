import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css'; 
import Horibar from '../horibar/Horibar';

const Home = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://golden-lily-11402c.netlify.app/';
  };

  return (
    <div className="home-page">
      <Horibar />
      <Container className="home-container d-flex flex-column align-items-center justify-content-center">
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <img
              src="https://www.shutterstock.com/image-photo/green-field-under-beautiful-dark-blue-142404247"
              alt="Weather related"
              className="img-fluid rounded shadow-lg mb-4"
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
            />
            <h2 className="mb-3">Explore Weather Details</h2>
            <p className="text-muted mb-4">
              Discover the latest weather information at your fingertips.
            </p>
            <Button variant="primary" onClick={handleButtonClick}>
              Go to Weather Details
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
