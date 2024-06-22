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
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/landInfo">Land Info</Nav.Link>
            <Nav.Link as={Link} to="/report">Report</Nav.Link>
            <Nav.Link as={Link} to="/talkToExpert">Talk to Expert</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    
    </div>
  )
}

export default Horibar