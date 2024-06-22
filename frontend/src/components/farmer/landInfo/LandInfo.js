import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import Horibar from '../horibar/Horibar';
import './LandInfo.css'
function LandInfo() {
  return (
    <div className="">
        <Horibar></Horibar>
            <Form className="p-4">
                <h1 className="mb-4">Farmer Registration</h1>
                
                <Form.Group as={Row} className="mb-3" controlId="formFarmerName">
                    <Form.Label column sm="2" className="form-label">Farmer's Name</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter farmer's name" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formAddress">
                    <Form.Label column sm="2" className="form-label">Address</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter address" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPincode">
                    <Form.Label column sm="2" className="form-label">Pincode</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter pincode" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formAadharNumber">
                    <Form.Label column sm="2" className="form-label">Aadhar Number</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter Aadhar number" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formContactNumber">
                    <Form.Label column sm="2" className="form-label">Contact Number</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter contact number" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formAreaPloughed">
                    <Form.Label column sm="2" className="form-label">Area Ploughed (acres)</Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" placeholder="Enter area ploughed" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formSeason">
                    <Form.Label column sm="2" className="form-label">Season</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter season" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formCropGrown">
                    <Form.Label column sm="2" className="form-label">Crop Grown</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter crop grown" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formSeedsUsed">
                    <Form.Label column sm="2" className="form-label">Seeds Used</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter seeds used" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formDateSeedSown">
                    <Form.Label column sm="2" className="form-label">Date of Seed Sown</Form.Label>
                    <Col sm="10">
                        <Form.Control type="date" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formTransplantingMethod">
                    <Form.Label column sm="2" className="form-label">Transplanting Method</Form.Label>
                    <Col sm="10">
                        <Form.Control as="select" className="form-control">
                            <option value="manual">Manual</option>
                            <option value="machine">Machine</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formIrrigationMethod">
                    <Form.Label column sm="2" className="form-label">Irrigation Method</Form.Label>
                    <Col sm="10">
                        <Form.Control as="select" className="form-control">
                            <option value="borewell">Borewell</option>
                            <option value="drip">Drip</option>
                            <option value="well">Well</option>
                            <option value="river">River</option>
                            <option value="rain">Rain</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formFertilizersUsed">
                    <Form.Label column sm="2" className="form-label">Fertilizers Used</Form.Label>
                    <Col sm="10">
                        <Form.Control as="select" className="form-control">
                            <option value="organic">Organic</option>
                            <option value="chemical">Chemical</option>
                            <option value="bioinputs">Bioinputs</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formDateHarvesting">
                    <Form.Label column sm="2" className="form-label">Date of Harvesting</Form.Label>
                    <Col sm="10">
                        <Form.Control type="date" className="form-control" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formYieldKg">
                    <Form.Label column sm="2" className="form-label">Yield (kg)</Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" placeholder="Enter yield in kg" className="form-control" />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
  )
}

export default LandInfo