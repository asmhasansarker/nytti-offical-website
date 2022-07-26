import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../App";
// import NavDropdown from "react-bootstrap/NavDropdown";
import trainingCenterLogo from "../assets/trainingCenterLogo.png";
import "./navigation.css";

function Navigation() {
  const [user] = useContext(UserContext)
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img
            src={trainingCenterLogo}
            alt="logo"
            className="img-fluid"
            style={{ width: "110px", height: "64px" }}
          />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user.isSignedIn && user.role === "admin" ? (
            <Nav className="ms-auto navbar-nav ">
              <NavLink to="/" className="navItem nav-link">
                Home
              </NavLink>
              <NavLink to="/courses" className="navItem nav-link">
                Courses
              </NavLink>
              <NavLink to="/applyNow" className="navItem nav-link">
                Apply Now
              </NavLink>
              <NavLink to="/addTeacher" className="navItem nav-link">
                Add Teacher
              </NavLink>
              <NavLink to="/ourAllStudents" className="navItem nav-link">
                Our Students
              </NavLink>
              <NavLink to="/about-us" className="navItem nav-link">
                About Us
              </NavLink>
              <NavLink to="/dashboard" className="navItem nav-link">
                Admin
              </NavLink>
            </Nav>
          ) : (
            <Nav className="ms-auto navbar-nav ">
              <NavLink to="/" className="navItem nav-link">
                Home
              </NavLink>
              <NavLink to="/courses" className="navItem nav-link">
                Courses
              </NavLink>
              <NavLink to="/applyNow" className="navItem nav-link">
                Apply Now
              </NavLink>

              <NavLink to="/contact-us" className="navItem nav-link">
                Contact Us
              </NavLink>
              <NavLink to="/about-us" className="navItem nav-link">
                About Us
              </NavLink>
              <NavLink to="/login" className="navItem nav-link">
                Login
              </NavLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
