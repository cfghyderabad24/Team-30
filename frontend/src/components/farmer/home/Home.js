import {React,useEffect }from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css'; 
import Horibar from '../horibar/Horibar';

const Home = () => {
  const handleWeatherButtonClick = () => {
    window.location.href = 'https://golden-lily-11402c.netlify.app/';
  };

  const handleDiseasePredictionButtonClick = () => {
    window.location.href = 'https://example-disease-prediction.netlify.app/';
  };
  useEffect(() => {
    const tawk = document.createElement("script");
    tawk.type = "text/javascript";
    tawk.async = true;
    tawk.src = "https://embed.tawk.to/6598b9728d261e1b5f5028a2/1hje98qdk";
    // tawk.src = "https://tawk.to/chat/66773fb0eaf3bd8d4d136675/1i10t1jai";
    tawk.charset = "UTF-8";
    document.head.appendChild(tawk);

    return () => {
      document.head.removeChild(tawk);
    };
  }, []);

  return (
    <div className="home-page">
      <Horibar />
      <Container className="home-container d-flex flex-column align-items-center justify-content-center">
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/815/878/non_2x/clouds-and-sky-weather-nature-background-horizontal-banner-illustration-vector.jpg"
              alt="Weather related"
              className="img-fluid rounded shadow-lg mb-4"
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
            />
            <h2 className="mb-3">Explore Weather Details</h2>
            <p className="text-muted mb-4">
              Discover the latest weather information at your fingertips.
            </p>
            <Button variant="primary" onClick={handleWeatherButtonClick}>
              Go to Weather Details
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/64/57/36/1000_F_264573622_SE1i7z2qOeQ4ywwUALWHtDzFZ5Wjfc8x.jpg"
              alt="Crop Disease Prediction"
              className="img-fluid rounded shadow-lg mb-4"
              style={{ maxHeight: '200px', width: '3500px', objectFit: 'cover' }}
            />
            <h2 className="mb-3">Predict Crop Diseases</h2>
            <p className="text-muted mb-4">
              Click this button to predict disease of your crop.
            </p>
            <Button variant="success" onClick={handleDiseasePredictionButtonClick}>
              Go to Disease Prediction
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;