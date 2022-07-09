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

const App = () => {
  return (
    <>
      <EasyContact />
      <BackgroundImage>
        <Navigation />
      </BackgroundImage>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
