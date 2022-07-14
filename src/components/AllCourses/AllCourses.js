import React, { useEffect } from 'react'
import CourseCard from '../PopularCourseSlider/courseCard'
import webDesignAndDevelopment from "../assets/webDesignAndDevelopment.jpg";
import digitalMarketing from "../assets/digitalMarketing.jpg";
import msOffice from "../assets/msOfficeMale.jpg";
import kidsProgramming from "../assets/kidsProgramming.jpg";
import graphicDesign from "../assets/graphicDesign.jpg";
import hscICT from "../assets/hscICT.jpg";
// import allCoursesBanner from '../assets/allCoursesBanner.jpg'


const AllCourses = () => {
  useEffect(() => {
    document.title="All Courses"
  })
  return (
    <>
      <div className='container'>
      <div className='card bg-info bg-gradient py-3 mb-3 mt-3'>
                <div className=' text-center '>
                    <h3>OUR ALL COURSES</h3>
                </div>
            </div>
        {/* <div class="card bg-dark text-white " >
          <img src={allCoursesBanner} class="card-img" alt="courseBannerPhoto" />
          <div class="card-img-overlay">
            <h1 class="card-title text-dark h2 text-center">All Courses are available</h1>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div> */}
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