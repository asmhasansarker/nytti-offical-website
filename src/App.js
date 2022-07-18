import React from "react";
import Home from "./Home";
import EasyContact from "./components/easyContact/easyContact";
import Navigation from "./components/navigation/navigation";
import BackgroundImage from "./components/custom/background/BackgroundImage";
import { Routes, Route } from "react-router-dom";
import AllCourses from "./components/AllCourses/AllCourses";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/Form/LoginForm";
import RegistrationForm from "./components/Form/RegistrationForm";

const App = () => {
  
  return (
    <>
      <EasyContact />
      <BackgroundImage>
        <Navigation />
      </BackgroundImage>

      <Routes>
        
        <Route exact path="/courses" element={<AllCourses />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/signup" element={<RegistrationForm />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
