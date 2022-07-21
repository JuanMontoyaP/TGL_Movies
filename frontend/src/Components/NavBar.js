import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from "react-bootstrap";
import { TbMovie } from "react-icons/tb";


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm"  style={{ backgroundColor: '#243747',}} fixed="top">
    <Container>
      <Navbar.Brand  style={{ color: 'white',}} href="#home">Movie Search Engine</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link style={{ color: 'white'}} href="#"><TbMovie/></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link style={{ color: 'white',}} href="#deets">SignUp</Nav.Link>
          <Nav.Link style={{ color: 'white',}} eventKey={2} href="#memes">
            LogIn
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavBar
