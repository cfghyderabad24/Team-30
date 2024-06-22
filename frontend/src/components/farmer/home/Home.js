import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css'; 
import Horibar from '../horibar/Horibar';
const Home = () => {
  return (
    <div className="">
        <Horibar></Horibar>
    <Container className="home-container">
      <Row>
        <Col md={6} lg={3} className="mb-4">
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Temperature</Card.Title>
              <Card.Text>
                Current temperature: 28°C
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Crop Selection</Card.Title>
              <Card.Text>
                Best crops to plant this season: Wheat, Corn
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Soil Type</Card.Title>
              <Card.Text>
                Ideal soil type: Loamy soil
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="info-card">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Example image" />
            <Card.Body>
              <Card.Title>Picture</Card.Title>
              <Card.Text>
                An example of a good farming practice.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>);
}

export default Home;

