import { Fragment, useContext, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../App";
// import NavDropdown from "react-bootstrap/NavDropdown";
import trainingCenterLogo from "../assets/trainingCenterLogo.png";
import "./navigation.css";
import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import { adminEmail, adminPassword } from "../adminInfo/adminInfo";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";

function Navigation() {
  let passRef,
    emailRef = useRef();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useContext(UserContext);

  const SubmitLogin = () => {
    let email = emailRef.value;
    let pass = passRef.value;
    if (email !== adminEmail || pass !== adminPassword) {
      ErrorToast("Invalid User");
    } else {
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({ isSignedIn: true, role: "admin" })
      // );
      
      setUser({ ...user, isSignedIn: true, role: "admin" });
      SuccessToast("Logged In Successfully.");
      handleClose();
    }
  };

  const handleLogOut = () => {
    // localStorage.removeItem("user");
    // localStorage.setItem(
    //   "user",
    //   JSON.stringify({ isSignedIn: false, role: "user" })
    // );

    
    setUser({
      ...user,
      isSignedIn: false,
      role: "user",
    });
    SuccessToast("Logged Out Successfully");
  };
  return (
    <Fragment>
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
                <NavLink to="/addCourse" className="navItem nav-link">
                  Add Course
                </NavLink>
                <NavLink to="/ourAllStudents" className="navItem nav-link">
                  Our Students
                </NavLink>
                <NavLink to="/about-us" className="navItem nav-link">
                  About Us
                </NavLink>
                {/* <NavLink to="/dashboard" className="navItem nav-link">
                  Admin
                </NavLink> */}

                <NavLink to="/">
                  <div className=" ms-4">
                    <button onClick={handleLogOut} className="btn btn-primary">
                      Log out
                    </button>
                  </div>
                </NavLink>
                {/* <div className=" ms-4">
                  <button onClick={handleLogOut} className="btn btn-primary">
                    Log out
                  </button>
                </div> */}
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
                <NavLink to="/result" className="navItem nav-link">
                  Result
                </NavLink>
                <NavLink to="/about-us" className="navItem nav-link">
                  About Us
                </NavLink>
                <NavLink to="/contact-us" className="navItem nav-link">
                  Contact Us
                </NavLink>

                {/* <NavLink to="/login" className="navItem nav-link">
                Login
              </NavLink> */}

                <div className=" ms-4">
                  <button onClick={handleShow} className="btn btn-primary">
                    Login
                  </button>
                </div>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Login first...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          <input
            ref={(input) => (emailRef = input)}
            placeholder="User Email"
            className="form-control animated fadeInUp"
            type="email"
          />
          <br />
          <input
            ref={(input) => (passRef = input)}
            placeholder="User Password"
            className="form-control animated fadeInUp"
            type="password"
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={SubmitLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default Navigation;
