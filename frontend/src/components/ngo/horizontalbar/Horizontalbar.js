import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Horizontalbar.css'; 

function Horizontalbar() {
  return (
    <div>
      {/* Top Navbar */}
      <Navbar bg="black" expand="lg" className="top-navbar">
        <Navbar.Brand href="#home">IFTR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/analytics">Analytics</Nav.Link>
            <Nav.Link as={Link} to="/answerQueries">Queries</Nav.Link>
            <Nav.Link as={Link} to="/farmerProfiles">Farmer Profiles</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    
    </div>
  )
}

export default Horizontalbar