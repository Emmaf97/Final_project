import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../styles/NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Col from 'react-bootstrap/Col';




function NavbarTemplate() {
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
            />{' '}
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
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
              </Navbar>
              </Col>
    </>
  );
}

export default NavbarTemplate;
