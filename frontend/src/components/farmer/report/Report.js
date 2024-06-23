import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import Horibar from '../horibar/Horibar';
import axios from 'axios';
import './Report.css';

const Report = () => {
  const [formData, setFormData] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const handleDownloadPDF = () => {
    // Replace with logic to download PDF
    alert('Downloading PDF...');
  };

  useEffect(() => {
    // Fetch registration data from the backend
    axios.get('/api/registration-details')
      .then(response => {
        setFormData(response.data);
        setPdfFile(response.data.pdfFileUrl); // Assuming the PDF URL is part of the response
      })
      .catch(error => {
        console.error('Error fetching registration details:', error);
      });
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    
    <div>
      <Horibar></Horibar>
      <Container className="report-container">
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Registration Details</Card.Header>
            <Card.Body>
              {formData ? (
                <div>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Password:</strong> {formData.password}</p>
                  <p><strong>Address:</strong> {formData.address}</p>
                  <p><strong>Pincode:</strong> {formData.pincode}</p>
                  <p><strong>Aadhar Number:</strong> {formData.aadhar_no}</p>
                  <p><strong>Contact Number:</strong> {formData.contact_no}</p>
                  <p><strong>Area Ploughed:</strong> {formData.area_ploughed}</p>
                  <p><strong>Season:</strong> {formData.season}</p>
                  <p><strong>Crop Grown:</strong> {formData.crop_grown}</p>
                  <p><strong>Seeds Used:</strong> {formData.seeds_used}</p>
                  <p><strong>Date of Seed Sown:</strong> {formData.date_of_seed_sown}</p>
                  <p><strong>Transplanting Method:</strong> {formData.transplanting_method}</p>
                  <p><strong>Irrigation Method:</strong> {formData.irrigation_method}</p>
                  <p><strong>Fertilizers Used:</strong> {formData.fertilizers_used}</p>
                  <p><strong>Date of Harvesting:</strong> {formData.date_of_harvesting}</p>
                  <p><strong>Yield (kg):</strong> {formData.yield_kg}</p>
                </div>
              ) : (
                <p>
                    "name": "John Doe"<br></br>
                    "password": "securepassword123"<br></br>
                    "address": "123 Farm Lane, Village X, District Y"<br></br>
                    "pincode": "123456"<br></br>
                    "aadhar_no": "1234-5678-9101"<br></br>
                    "contact_no": "9876543210"<br></br>
                    "area_ploughed": "5 acres"<br></br>
                    "season": "Kharif"<br></br>
                    "crop_grown": "Wheat"<br></br>
                    "seeds_used": "XYZ Seeds"<br></br>
                    "date_of_seed_sown": "2023-01-15"<br></br>
                    "transplanting_method": "Manual"<br></br>
                    "irrigation_method": "Borewell"<br></br>
                    "fertilizers_used": "Organic"<br></br>
                    "date_of_harvesting": "2023-06-20"<br></br>
                    "yield_kg": "1000"<br></br>
                  
                  </p>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>PDF Preview</Card.Header>
            <Card.Body>
              {pdfFile ? (
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                  ))}
                </Document>
              ) : (
                <Button variant="primary" onClick={handleDownloadPDF}>
                  Download PDF
                </Button>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header>Report Video</Card.Header>
            <Card.Body>
              <p>Watch the video for a detailed report explanation:</p>
              <a href="https://www.youtube.com/watch?v=VUF45R6jNBU" target="_blank" rel="noopener noreferrer">
                Report Video
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    
  );
};

export default Report;
