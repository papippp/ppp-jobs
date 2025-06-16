import { useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";



export default function Hero() {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectIndex) => {
        setIndex(selectIndex)
    }
    return (
        <section id="home">
            <div className="hero-carousel-container" style={{ paddingTop: "80px" }}>
                <Carousel fade interval={5000} controls={true} indicators={true} activeIndex={index} onSelect={handleSelect} >
                    {/* Slide 1 */}
                    <Carousel.Item>
                        <div
                            className="carousel-slide"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/dqcztgs4v/image/upload/v1749903439/image_6_x6314a.jpg)`
                            }}
                        >
                            <Container className="slide-content">
                                <Carousel.Caption className="text-start">
                                    <h1 className="display-4 fw-bold mb-4">Discover Welcome to Whole Food Market</h1>
                                    <p className="lead mb-4">
                                        We are currently in a contract with stores around the states such as Walmart, eBay, Rite Aid, Dollar General, CVS, PUBLIX, WALGREENS, KROGER, and BEST BUY.
                                    </p>

                                </Carousel.Caption>
                            </Container>
                        </div>
                    </Carousel.Item>

                    {/* Slide 2 */}
                    <Carousel.Item>
                        <div
                            className="carousel-slide"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/dqcztgs4v/image/upload/v1749903440/image_5_vcxvpf.jpg)`
                            }}
                        >
                            <Container className="slide-content">
                                <Carousel.Caption className="text-start">
                                    <h1 className="display-4 fw-bold mb-4">Flexible Work Opportunities</h1>
                                    <p className="lead mb-4">
                                        You are never obligated to accept an assignment. There are no charges to participate and no experience needed. After signing up, you'll receive training materials via email.
                                    </p>

                                </Carousel.Caption>
                            </Container>
                        </div>
                    </Carousel.Item>

                    {/* Slide 3 */}
                    <Carousel.Item>
                        <div
                            className="carousel-slide"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/dqcztgs4v/image/upload/v1749903438/image_7_zcoh6d.jpg)`
                            }}
                        >
                            <Container className="slide-content">
                                <Carousel.Caption className="text-start">
                                    <h1 className="display-4 fw-bold mb-4">Free Training & Competitive Pay</h1>
                                    <p className="lead mb-4">
                                        We never charge fees for shopper training. Mystery shoppers are paid a pre-arranged fee per assignment, with potential earnings of $450 per completed evaluation.
                                    </p>
                                </Carousel.Caption>
                            </Container>
                        </div>
                    </Carousel.Item>

                    {/* Fixed Read More Button */}

                </Carousel>
                <div className="fixed-read-more">
                    <Button href="#about" variant="primary" size="lg" className="rounded-pill px-4">
                        Read More
                    </Button>
                </div>
            </div>
            <Container className="features-container py-5">
                <Row className="g-4">
                    <Col lg={4}>
                        <Card className="h-100 feature-card">

                            <Card.Body className="text-center p-4">
                                <div className="feature-icon mb-4">
                                    <i className="bi bi-laptop fs-1 text-primary"></i>
                                </div>
                                <Card.Title className="fs-3 mb-3">ASSIGNMENT</Card.Title>
                                <Card.Text className="text-muted">
                                    The goal of this survey is to evaluate the efficiency of the human resources of the selected stores network across the U.S given minimal supervision.
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>
                    <Col lg={4}>
                        <Card className="h-100 feature-card">

                            <Card.Body className="text-center p-4">
                                <div className="feature-icon mb-4">
                                    <i className="bi bi-briefcase fs-1 text-primary"></i>
                                </div>

                                <Card.Title className="fs-3 mb-3">EXECUTION </Card.Title>
                                <Card.Text className="text-muted">
                                    You are to walk into any of these stores outlets to carry out your assignment as a normal customer would, not hinting at the fact that you are a secret shopper or evaluator.
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>
                    <Col lg={4}>
                        <Card className="h-100 feature-card">

                            <Card.Body className="text-center p-4">
                                <div className="feature-icon mb-4">
                                    <i className="bi bi-calendar4-week fs-1 text-primary"></i>

                                </div>

                                <Card.Title className="fs-3 mb-3">COMPENSATION</Card.Title>
                                <Card.Text className="text-muted">
                                    Upon completion you get paid $450 per assignment, and the minimum assignment is one (1) per week.
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </section>


    )
}
