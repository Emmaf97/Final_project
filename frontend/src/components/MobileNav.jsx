import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={Link} to="/">
          <img
              src="../src/images/Logo_v1.png"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            {/* Optionally add text next to the image */}
                  <span className="brand-text ms-2">Fé</span>
              </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/myths">Myths</Nav.Link>
                      <Nav.Link as={Link} to="/folklore">Folklore</Nav.Link>
                      <Nav.Link as={Link} to="/gods">Gods</Nav.Link>
                      <Nav.Link as={Link} to="/gods">Modern Ireland</Nav.Link>
                      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
                  <Nav>
                      <Nav.Link as={Link} to="/login">Login</Nav.Link>
                      <Nav.Link as={Link} to="/register">Register</Nav.Link>
                      <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;