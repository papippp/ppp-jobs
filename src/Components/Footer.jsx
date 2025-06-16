import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="bg-white py-4 border-top">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <span className="text-dark fw-bold">WHOLE FOODS MARKET</span>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <p className="text-muted mb-0 small">
                            © Copyright {new Date().getFullYear()} Whole Foods Market. All Rights Reserved<br />
                            Designed by Whole Food Design Inc
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}