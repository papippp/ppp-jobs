import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About Us" },
        { id: "apply", label: "Apply Now" },
    ];

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className="py-3 bg-white shadow-sm"
            expanded={expanded}
        >
            <Container>
                <Navbar.Brand
                    href="#home"
                    className="d-flex align-items-center"
                    onClick={() => setExpanded(false)}
                >
                    <span className="text-primary fw-bold fs-3">WHOLE FOODS</span>
                    <span className="text-dark ms-2 fs-6">MARKET RESEARCH</span>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                    className="border-0"
                >
                    <span className={`navbar-toggler-icon ${expanded ? "open" : ""}`}></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="align-items-center gap-lg-4 me-lg-4">
                        {navItems.slice(0, -1).map((item) => (
                            <Nav.Link
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-dark fw-medium px-3 py-2"
                                onClick={() => setExpanded(false)}
                            >
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>

                    <Button
                        href={`#${navItems[navItems.length - 1].id}`}
                        variant="primary"
                        className="rounded-pill px-4 py-2 fw-medium"
                        onClick={() => setExpanded(false)}
                    >
                        {navItems[navItems.length - 1].label}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}