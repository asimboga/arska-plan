import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../Image/Arska-logo.jpeg";
import { NavLink } from "react-router-dom";


function BasicExample() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="100" className="rounded" alt="Arska-logo" />
        </Navbar.Brand>
        <Navbar.Brand as={NavLink} href="/">
          Arska Plan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5" activeKey="/home">
            <Nav.Link as={NavLink} href="/" exact>
              Ana sayfa
            </Nav.Link>
            <Nav.Link as={NavLink} href="contact">
              Hakkımızda
            </Nav.Link>
            <Nav.Link as={NavLink} href="products">
              Ürünler
            </Nav.Link>
            <NavDropdown title="Haritalar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Arazi Kullanım Haritaları
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Afet Risk Haritaları
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tematik Haritalar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Demografik Haritalar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
