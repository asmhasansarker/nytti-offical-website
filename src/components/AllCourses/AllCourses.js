import React from 'react'
import CourseCard from '../PopularCourseSlider/courseCard'
import webDesignAndDevelopment from "../assets/webDesignAndDevelopment.jpg";
import digitalMarketing from "../assets/digitalMarketing.jpg";
import msOffice from "../assets/msOfficeMale.jpg";
import kidsProgramming from "../assets/kidsProgramming.jpg";
import graphicDesign from "../assets/graphicDesign.jpg";
import hscICT from "../assets/hscICT.jpg";


const AllCourses = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <CourseCard
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
          />
        </div>

      </div>
      
    </>
  )
}

export default AllCourses