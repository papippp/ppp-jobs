import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {
    return (
        <section id="about" className="py-5 bg-light">
            <Container>
                <Row className="mb-5">
                    <Col className="text-center">
                        <h2 className="display-4 fw-bold text-primary">ABOUT US</h2>
                        <div className="divider mx-auto bg-primary"></div>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col lg={8} className="mx-auto text-center">
                        <p className="lead mb-4">
                            Whole Foods Market Research Inc ® is currently in a contract with major retailers nationwide including Walmart,
                            Best Buy, CVS, Walgreens, Kroger, and others. We're accepting applications for qualified individuals to
                            participate in our secret evaluation program.
                        </p>
                        <p>
                            Our program has been featured on ABC News, NBC News, LA Times, and works with leading organizations
                            across various industries. <strong>Only USA residents can apply.</strong>
                        </p>
                    </Col>
                </Row>

                <Row className="g-4 mb-5">
                    <Col md={6}>
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Body className="p-4">
                                <h3 className="h4 mb-4 text-primary">Evaluation Criteria</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="bi bi-geo-alt-fill fs-5 text-primary me-3"></i>
                                        <span>Store name, address, date and time of visit</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="bi bi-person-badge-fill fs-5 text-primary me-3"></i>
                                        <span>Name of cashier/attendant (if visible)</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="bi bi-cart-check-fill fs-5 text-primary me-3"></i>
                                        <span>Did staff thank you upon purchase completion?</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="bi bi-chat-square-text-fill fs-5 text-primary me-3"></i>
                                        <span>Overall experience with store staff</span>
                                    </li>
                                    <li className="d-flex align-items-start">
                                        <i className="bi bi-stopwatch-fill fs-5 text-primary me-3"></i>
                                        <span>Checkout time duration</span>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Body className="p-4">
                                <h3 className="h4 mb-4 text-primary">Requirements</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="bi bi-phone-fill fs-5 text-primary me-3"></i>
                                        <span>iOS/Android smartphone with good camera quality</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="bi bi-mic-fill fs-5 text-primary me-3"></i>
                                        <span>Ability to record voice notes for assessments</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="bi bi-download fs-5 text-primary me-3"></i>
                                        <span>Ability to download our screen recorder app</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="bi bi-person-fill fs-5 text-primary me-3"></i>
                                        <span>Minimum age of 18 years</span>
                                    </li>
                                    <li className="d-flex align-items-start">
                                        <i className="bi bi-translate fs-5 text-primary me-3"></i>
                                        <span>Ability to articulate thoughts in English</span>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}