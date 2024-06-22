import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Horibar.css'; 

function Horibar() {
  return (
    <div>
      {/* Top Navbar */}
      <Navbar bg="light" expand="lg" className="top-navbar">
        <Navbar.Brand href="#home">IFTR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/dashboard/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/landinfo">Land Info</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/report">Report</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/talk-to-expert">Talk to Expert</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Main Content Area */}
      <Container fluid>
        <Row>
          <Col md={12} className="main-content">
            <h1>Dashboard</h1>
            {/* Add more components and content here */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Horibar