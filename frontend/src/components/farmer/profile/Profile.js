import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import './Profile.css';
import Horibar from '../horibar/Horibar';

const Profile = () => {
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
    yield_kg: '',
  });

  const [editMode, setEditMode] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    
    axios.get('/api/farmer-profile/1') 
      .then(response => {
        if (response.data) {
          setFormData(response.data);
        } else {
          
          setFormData({
            name: 'John Doe',
            password: 'password123',
            address: '123 Main St',
            pincode: '123456',
            aadhar_no: '1234-5678-9101',
            contact_no: '9876543210',
            area_ploughed: '10',
            season: 'Winter',
            crop_grown: 'Wheat',
            seeds_used: 'Hybrid',
            date_of_seed_sown: '2023-01-15',
            transplanting_method: 'manual',
            irrigation_method: 'drip',
            fertilizers_used: 'organic',
            date_of_harvesting: '2023-06-30',
            yield_kg: '5000',
          });
        }
      })
      .catch(error => {
        console.error('Error fetching profile details:', error);
        
        setFormData({
          name: 'John Doe',
          password: 'password123',
          address: '123 Main St',
          pincode: '123456',
          aadhar_no: '1234-5678-9101',
          contact_no: '9876543210',
          area_ploughed: '10',
          season: 'Winter',
          crop_grown: 'Wheat',
          seeds_used: 'Hybrid',
          date_of_seed_sown: '2023-01-15',
          transplanting_method: 'manual',
          irrigation_method: 'drip',
          fertilizers_used: 'organic',
          date_of_harvesting: '2023-06-30',
          yield_kg: '5000',
        });
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/api/farmer-profile/1', formData) 
      .then(response => {
        console.log('Profile updated successfully');
        setEditMode(false);
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000); 
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="">
      <Horibar/>
    <Container className="landinfo-container">
      <h1 className="mb-4">Farmer Profile</h1>
      {saveSuccess && <Alert variant="success">Saved successfully!</Alert>}
      <Form onSubmit={handleSubmit}>
        {Object.keys(formData).map(key => (
          <Form.Group as={Row} className="mb-3" key={key} controlId={`form${key}`}>
            <Form.Label column sm="2" className="form-label">
              {key.replace(/_/g, ' ')}
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type={key.includes('date') ? 'date' : 'text'}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="form-control"
                readOnly={!editMode}
              />
            </Col>
          </Form.Group>
        ))}
        <div className="form-buttons">
          <Button variant="success" type="submit" disabled={!editMode} className="save-button">
            Save
          </Button>
          <Button variant="primary" onClick={() => setEditMode(!editMode)} className="edit-button">
            {editMode ? 'Cancel' : 'Edit'}
          </Button>
        </div>
      </Form>
    </Container>
    </div>
  );
};

export default Profile;