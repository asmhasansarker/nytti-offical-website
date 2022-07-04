import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Courses from "./components/courses/courses";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
};

export default App;
