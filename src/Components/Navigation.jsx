import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../App.css";
const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" className="py-3" expand="lg">
      <Container>
        <Navbar.Brand
          style={{ fontSize: 22 }}
          href=""
          className="d-flex align-items-center"
        >
          <img
            src="/nav-brand img.png"
            width="130"
            height="25"
            className="d-inline-block align-center"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="px-5">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="me-4 text-secondary"
            >
              Home
            </Link>
            <Link
              to="/About"
              style={{ textDecoration: "none" }}
              className="me-4 text-secondary"
            >
              About
            </Link>
            <Link
              to="/Service"
              style={{ textDecoration: "none" }}
              className="me-4 text-secondary"
            >
              Service
            </Link>
            <Link
              to="/Contact"
              style={{ textDecoration: "none" }}
              className="text-secondary"
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
