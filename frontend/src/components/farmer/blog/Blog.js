import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';
import Horibar from '../horibar/Horibar';
import './Blog.css'
function Blog() {

    const videos = [
        {
            src: 'https://www.youtube.com/embed/4m8MIV8SwKQ',
            title: 'Soil Sampling and Testing',
            description: 'A comprehensive guide on how to properly sample and test soil.'
        },
        {
            src: 'https://www.youtube.com/embed/5TBC4FF6m9o',
            title: 'Understanding Soil Analysis Reports',
            description: 'This video explains how to understand and interpret soil analysis reports.'
        },
        {
            src: 'https://www.youtube.com/embed/fLtlVjYQoqY',
            title: 'The Importance of Soil Testing',
            description: 'Learn why soil testing is crucial for healthy crop production and sustainable farming.'
        }
    ];

    return (
        <div>
        <Horibar/>
        <Container className="custom-container">
            <div className="card-container">
                {videos.map((video, index) => (
                    <Card className="mb-4" key={index}>
                        <Row noGutters>
                            <Col md={6} className="video-col">
                                <iframe
                                    src={video.src}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </Col>
                            <Col md={6} className="description-col">
                                <Card.Body className="custom-card-body">
                                    <Card.Title>{video.title}</Card.Title>
                                    <Card.Text>{video.description}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </div>
        </Container>
        </div>
    );
}

export default Blog