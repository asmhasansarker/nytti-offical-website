import React, { createContext, Fragment, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import EasyContact from "./components/easyContact/easyContact";
import Navigation from "./components/navigation/navigation";
import BackgroundImage from "./components/custom/background/BackgroundImage";
import AllCourses from "./components/AllCourses/AllCourses";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
// import LoginForm from "./components/Form/LoginForm";
// import RegistrationForm from "./components/Form/RegistrationForm";
import TestLoginPage from "./components/pages/TestLoginPage.jsx";
import RegistrationPage from "./components/pages/Registration-Page";
// import NoticeForAdmission from "./components/NoticeForAdmission/NoticeForAdmission";

export const UserContext = createContext();

// const getToken = false;
const App = () => {
  const [user, setUser] = useState({
    isSignedIn: true,
    role: "admin",
  });

  if (user.isSignedIn) {
    return (
      <Fragment>
        <UserContext.Provider value={[user, setUser]}>
          <EasyContact />
          <BackgroundImage>
            <Navigation />
          </BackgroundImage>
          
          <Routes>
            
            <Route exact path="/courses" element={<AllCourses />} />
            {/* <Route
              exact
              path="/login"
              element={
                <LoginForm
                  loggedIn={user.role === "student" ? user.role : "Admin "}
                />
              }
            /> */}
            {/* <Route exact path="/signup" element={<RegistrationForm />} /> */}
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Footer />
        </UserContext.Provider>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <UserContext.Provider value={[user, setUser]}>
          <EasyContact />
          <BackgroundImage>
            <Navigation />
          </BackgroundImage>

          <Routes>
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route exact path="/Login" element={<TestLoginPage />} />
            <Route exact path="/Registration" element={<RegistrationPage />} />
          </Routes>
          <Footer />
        </UserContext.Provider>
      </Fragment>
    );
  }
};

export default App;
