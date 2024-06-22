import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  const [userType, setUserType] = useState('admin'); // default to admin

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
    alert(`Logging in as ${userType}`);
  };

  const styles = {
    page: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'row',
    },
    imageSide: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1532929900024-6413d2ed39c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '50%',
    },
    formSide: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      width: '50%',
    },
    loginForm: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
      padding: '2rem',
      borderRadius: '0.5rem',
      width: '100%',
      maxWidth: '400px', // Limit form width for better look
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.imageSide}></div>
      <div style={styles.formSide}>
        <Container>
          <Row className="justify-content-center">
            <Col>
              <div style={styles.loginForm}>
                <h2 className="text-center mb-4">Login</h2>
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                  </Form.Group>

                  <Form.Group controlId="formUserType">
                    <Form.Label>Login as</Form.Label>
                    <Form.Control as="select" value={userType} onChange={handleUserTypeChange}>
                      <option value="admin">Admin</option>
                      <option value="farmer">Farmer</option>
                    </Form.Control>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mt-3">
                    Login
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
