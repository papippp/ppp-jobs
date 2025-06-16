import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Apply() {
    return (
        <section id="apply">
            <Container className="py-5">
                <Row className="mb-4">
                    <Col className="text-center">
                        <h2 className="display-5 fw-bold text-primary mb-3">
                            Get In Touch With The Below Required Details To Apply
                        </h2>
                        <div className="divider mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
                    </Col>
                </Row>

                <Row className="mb-5 justify-content-center">
                    <Col lg={8} className="text-center">
                        <p className="text-muted mb-4">
                            Interested applicants should only give accurate information when filling out the application form below.
                            Multiple submissions of the form by applicants will lead to disqualification, so applicants should
                            carefully cross-check their details after filling out the form before submission. The form should be filled in once.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={8} className="bg-light p-4 rounded-3 shadow-sm">
                        <div className="text-center mb-4">
                            <h2 className="fw-bold text-primary">
                                <strong>Apply Now</strong>
                            </h2>
                        </div>

                        <Form
                            action='https://formspree.io/f/xrbkkqwg'
                            method="POST"
                            encType="multipart/form-data"
                        >
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            className="py-2"
                                            required
                                            name="email"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="py-2"
                                            required
                                            name="full name"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">Driver's Licence Photo (Front)</Form.Label>
                                        <Form.Control
                                            type="file"
                                            className="py-2"

                                            name="front picture"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">Driver's Licence Photo (Back)</Form.Label>
                                        <Form.Control
                                            type="file"
                                            className="py-2"

                                            name="back picture"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your address"
                                    className="py-2"
                                    required
                                    name="address"
                                />
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your city"
                                            className="py-2"
                                            required
                                            name="city"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">State</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="State"
                                            className="py-2"
                                            required
                                            name="state"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">Zip Code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Zip code"
                                            className="py-2"
                                            required
                                            name="zip code"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">Phone Number</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            placeholder="Enter phone number"
                                            className="py-2"
                                            required
                                            name="phone number"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold">Birthday</Form.Label>
                                        <Form.Control
                                            type="date"
                                            className="py-2"
                                            required
                                            name="birthday"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="d-grid mt-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="fw-bold py-2"
                                    type="submit"
                                >
                                    Submit Application
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}