import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { TbMovie } from "react-icons/tb";



const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm"  style={{ backgroundColor: '#243747',}} fixed="top">
      <Container>
      <Navbar.Brand  className="text-light" href="#home">Movie Search Engine</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        //<Nav className="me-auto">
          <Nav.Link  href="#"><TbMovie style={{ color: 'white', fontSize: "25px"}}/></Nav.Link>
        </Nav>
        <Nav style={{justifyContent:"flex-end"}}>
          <Nav.Link className="text-light"  href="#SignUP">SignUp</Nav.Link>
          <Nav.Link className="text-light"  eventKey={2} href="#LogIn">
            LogIn
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavBar
