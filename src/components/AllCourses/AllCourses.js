import React, { useContext, useEffect } from 'react'
import CourseCard from '../PopularCourseSlider/courseCard'
// import webDesignAndDevelopment from "../assets/webDesignAndDevelopment.jpg";
// import digitalMarketing from "../assets/digitalMarketing.jpg";
// import msOffice from "../assets/msOfficeMale.jpg";
// import kidsProgramming from "../assets/kidsProgramming.jpg";
// import graphicDesign from "../assets/graphicDesign.jpg";
// import hscICT from "../assets/hscICT.jpg";
import axios from 'axios';
import { RootApi } from '../API_Request/ApiRequest';
import { AllCourses } from '../../App';
// import allCoursesBanner from '../assets/allCoursesBanner.jpg'


const AllCoursesPage = () => {

  const [allCourses, setAllCourses] = useContext(AllCourses);

  useEffect(() => {
    document.title = "All Courses"
    axios
      .get(`${RootApi}api/courses`)
      .then((res) => setAllCourses(res.data))
      .catch((err) => console.log(err));
  })


  const handleDeleteCourse = (id) => {
    console.log(id)
    axios
      .delete(`${RootApi}api/courses/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
 }



  return (
    <>
      <div className='container'>
      <div className='card bg-info bg-gradient py-3 mb-3 mt-3'>
                <div className=' text-center '>
                    <h3>OUR ALL COURSES</h3>
                </div>
            </div>
        
        <div className='row'>

          {
            allCourses.map((course, key) => {
              return (
                <CourseCard key={course._id}
                  id={course._id}
                  image={course.photo}
                  title={course.courseName}
                  duration={course.courseDuration}
                  fee={course.courseFee}
                  totalClass={course.totalClass}
                  deleteCourse={handleDeleteCourse}
                  
                />
              );
            })
          }
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

      </div>

    </>
  )
}

export default AllCoursesPage