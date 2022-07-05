import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";
import trainingCenterLogo from '../assets/trainingCenterLogo.png'
import './navigation.css'

function Navigation() {
  

  return (
    <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img src={trainingCenterLogo} alt="logo" className="img-fluid" style={{width:"110px",height:"64px"}}/>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navbar-nav" >
            <NavLink to="/"  className="navItem nav-link "> Home </NavLink>
            <NavLink to="/courses" className="navItem nav-link">Courses</NavLink>
            <NavLink to="/about-us" className="navItem nav-link">About Us</NavLink>
            <NavLink to="/contact-us" className="navItem nav-link">Contact Us</NavLink>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
