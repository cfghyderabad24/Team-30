import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import Horibar from '../horibar/Horibar';
import './LandInfo.css';

function LandInfo() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    address: '',
    pincode: '',
    aadhar_no: '',
    contact_no: '',
    area_ploughed: '',
    season: '',
    crop_grown: '',
    seeds_used: '',
    date_of_seed_sown: '',
    transplanting_method: '',
    irrigation_method: '',
    fertilizers_used: '',
    date_of_harvesting: '',
    yield_kg: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/farmers/', formData)
      .then(response => {
        setMessage('Registration successful');
      })
      .catch(error => {
        setMessage('Registration failed. Please try again.');
      });
  };

  return (
    <div className="">
      <Horibar />
      <Form className="p-4" onSubmit={handleSubmit}>
        <h1 className="mb-4">Farmer Registration</h1>
        
        {message && (
          <Alert variant={message === 'Registration successful' ? 'success' : 'danger'}>
            {message}
          </Alert>
        )}

        <Form.Group as={Row} className="mb-3" controlId="name">
          <Form.Label column sm="2" className="form-label">Farmer's Name</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter farmer's name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="password">
          <Form.Label column sm="2" className="form-label">Password</Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Enter password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="address">
          <Form.Label column sm="2" className="form-label">Address</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="pincode">
          <Form.Label column sm="2" className="form-label">Pincode</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter pincode"
              className="form-control"
              value={formData.pincode}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="aadhar_no">
          <Form.Label column sm="2" className="form-label">Aadhar Number</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter Aadhar number"
              className="form-control"
              value={formData.aadhar_no}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="contact_no">
          <Form.Label column sm="2" className="form-label">Contact Number</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter contact number"
              className="form-control"
              value={formData.contact_no}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="area_ploughed">
          <Form.Label column sm="2" className="form-label">Area Ploughed (acres)</Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Enter area ploughed"
              className="form-control"
              value={formData.area_ploughed}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="season">
          <Form.Label column sm="2" className="form-label">Season</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter season"
              className="form-control"
              value={formData.season}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="crop_grown">
          <Form.Label column sm="2" className="form-label">Crop Grown</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter crop grown"
              className="form-control"
              value={formData.crop_grown}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="seeds_used">
          <Form.Label column sm="2" className="form-label">Seeds Used</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter seeds used"
              className="form-control"
              value={formData.seeds_used}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="date_of_seed_sown">
          <Form.Label column sm="2" className="form-label">Date of Seed Sown</Form.Label>
          <Col sm="10">
            <Form.Control
              type="date"
              className="form-control"
              value={formData.date_of_seed_sown}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="transplanting_method">
          <Form.Label column sm="2" className="form-label">Transplanting Method</Form.Label>
          <Col sm="10">
            <Form.Control
              as="select"
              className="form-control"
              value={formData.transplanting_method}
              onChange={handleChange}
            >
              <option value="manual">Manual</option>
              <option value="machine">Machine</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="irrigation_method">
          <Form.Label column sm="2" className="form-label">Irrigation Method</Form.Label>
          <Col sm="10">
            <Form.Control
              as="select"
              className="form-control"
              value={formData.irrigation_method}
              onChange={handleChange}
            >
              <option value="borewell">Borewell</option>
              <option value="drip">Drip</option>
              <option value="well">Well</option>
              <option value="river">River</option>
              <option value="rain">Rain</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="fertilizers_used">
          <Form.Label column sm="2" className="form-label">Fertilizers Used</Form.Label>
          <Col sm="10">
            <Form.Control
              as="select"
              className="form-control"
              value={formData.fertilizers_used}
              onChange={handleChange}
            >
              <option value="organic">Organic</option>
              <option value="chemical">Chemical</option>
              <option value="bioinputs">Bioinputs</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="date_of_harvesting">
          <Form.Label column sm="2" className="form-label">Date of Harvesting</Form.Label>
          <Col sm="10">
            <Form.Control
              type="date"
              className="form-control"
              value={formData.date_of_harvesting}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="yield_kg">
          <Form.Label column sm="2" className="form-label">Yield (kg)</Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Enter yield in kg"
              className="form-control"
              value={formData.yield_kg}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LandInfo;

