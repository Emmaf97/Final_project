import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useUserInfo } from "../hooks/useUserInfo"; // Import the custom hook
import "../styles/NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

function NavbarTemplate() {
  const { user, loading } = useUserInfo();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    // Refresh the page to update the UI
    window.location.reload();
  };

  return (
    <>
      <Col xs={1} md={12} lg={12}>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src="../src/images/Logo_v1.png"
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{" "}
              {/* Optionally add text next to the image */}
              <span className="brand-text ms-2">Fé</span>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/myths">
                Myths
              </Nav.Link>
              <Nav.Link as={Link} to="/folklore">
                Folkore
              </Nav.Link>
              <Nav.Link as={Link} to="/celticgods">
                Gods
              </Nav.Link>
              <Nav.Link as={Link} to="/modIreland">
                Modern Ireland
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              {loading ? (
                <div>Loading...</div> // Loading state while fetching user info
              ) : user ? (
                <>
                  <Navbar.Text>Signed in as: {user.username}</Navbar.Text>{" "}
                  {/* Show username if authenticated */}
                  <Button variant="outline-danger" onClick={handleLogout}>
                    Logout
                  </Button>
                  <Link to="/profile">
                    <Button variant="outline-secondary" className="ml-2">
                      Profile
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  {/* Show login and register buttons if not authenticated */}
                  <Link to="/login">
                    <Button variant="outline-primary">Login</Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="outline-secondary" className="ml-2">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </>
  );
}

export default NavbarTemplate;
