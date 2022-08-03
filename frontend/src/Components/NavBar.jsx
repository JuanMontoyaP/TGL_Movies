import { Container } from "react-bootstrap";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { TbMovie } from "react-icons/tb";
import {useUserContext} from '../context/UserContext'


const NavBar = () => {
  const {isUserLogged, logout, logOutGoogle, googleUser} = useUserContext()
  
  function handleLogOut(){
  if(!googleUser){
    logout();
  }else{
    logOutGoogle();
  }
  }
  return (
    <Navbar collapseOnSelect expand="sm"  style={{ backgroundColor: '#243747',}} fixed="top">
      <Container>
      <Navbar.Brand  className="text-light" href="/">Movie Search Engine</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link  href="#"><TbMovie style={{ color: 'white', fontSize: "25px"}}/></Nav.Link>
        </Nav>
        <Nav style={{justifyContent:"flex-end"}}>
          {!isUserLogged ? 
          (<><Nav.Link className="text-light"  href="/signup">SignUp</Nav.Link>
          <Nav.Link className="text-light"  eventKey={2} href="/login">
          LogIn
        </Nav.Link></>)
          :
          <div className='text-light '>
           {/* <span>My Profile</span> */}
           <NavDropdown className='text-light ' style={{color: "white"}} 
          title={
            <span className="text-light">My Profile</span>
        }
            >
          <NavDropdown.Item href="/my-profile">Go to My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => handleLogOut()}>
            Log Out
          </NavDropdown.Item>
        </NavDropdown>
        </div>
        }
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavBar
