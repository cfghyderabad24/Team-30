import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';

const LoginPage = () => {
  const [userType, setUserType] = useState('admin'); // default to admin
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext); // Language context

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:8000/login/', { name, password, user_type: userType })
      .then(response => {
        if (response.data.success) {
          if (userType === 'admin') {
            navigate('/analytics');
          } else {
            navigate('/home');
          }
        } else {
          alert('Incorrect credentials');
        }
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred. Please try again.');
      });
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
    },
    caption: {
      marginTop: '1rem',
      textAlign: 'center',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
      cursor: 'pointer',
    },
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
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
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
                <div style={styles.caption}>
                  <p>Are you a Farmer not Registered? <span style={styles.link} onClick={() => navigate('/landInfo')}>Register now</span></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
