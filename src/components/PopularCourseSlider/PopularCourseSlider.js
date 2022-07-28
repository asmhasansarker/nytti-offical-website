import React, {  useContext, useEffect } from "react";
import "./popularCourseSlider.css";
// import webDesignAndDevelopment from "../assets/webDesignAndDevelopment.jpg";
// import digitalMarketing from "../assets/digitalMarketing.jpg";
// import msOffice from "../assets/msOfficeMale.jpg";
// import kidsProgramming from "../assets/kidsProgramming.jpg";
// import graphicDesign from "../assets/graphicDesign.jpg";
// import hscICT from "../assets/hscICT.jpg";
import CourseCard from "./courseCard";
import { AllCourses } from "../../App";
import axios from "axios";
import { RootApi } from "../API_Request/ApiRequest";

 const PopularCourseSlider = () => {

  const [allCourses, setAllCourses] = useContext(AllCourses);

  useEffect(() => {
    
    axios
      .get(`${RootApi}api/courses`)
      .then((res) => setAllCourses(res.data))
      .catch((err) => console.log(err));
  })
  
    return (
      <div className="row ">
        {allCourses.map((course, key) => {
          return (
            <CourseCard
              key={course._id}
              id={course._id}
              image={course.photo}
              title={course.courseName}
              duration={course.courseDuration}
              fee={course.courseFee}
              totalClass={course.totalClass}
              // deleteCourse={handleDeleteCourse}
            />
          );
        })}
        {/* <CourseCard
          image={webDesignAndDevelopment}
          title="Web Design And Development"
          description="With supporting text below as a natural lead-in to additional
                content."
        />

        <CourseCard
          image={digitalMarketing}
          title="Digital Marketing"
          description="With supporting text below as a natural lead-in to additional
                content."
        />

        <CourseCard
          image={msOffice}
          title="MS OFFICE"
          description="With supporting text below as a natural lead-in to additional
                content."
        />
        <CourseCard
          image={kidsProgramming}
          title="Programming for KIDS"
          description="With supporting text below as a natural lead-in to additional
                content."
        />
        <CourseCard
          image={graphicDesign}
          title="Graphic Design"
          description="With supporting text below as a natural lead-in to additional
                content."
        />
        <CourseCard
          image={hscICT}
          title="HSC ICT"
          description="With supporting text below as a natural lead-in to additional
                content."
        /> */}
      </div>
    );
}

export default PopularCourseSlider
