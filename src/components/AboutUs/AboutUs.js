import React, { useEffect } from 'react'
import aboutUsPhoto from '../assets/aboutUsPhoto.jpg'
import OurBranch from '../OurBranch/OurBranch'
import Instructor from './InstructorSection/Instructor'

const AboutUs = () => {
  useEffect(() => {
    document.title="About Us"
  })
  return (
    <div className="container">
      <div className="card mb-3">
        <img src={aboutUsPhoto} className="card-img-top" alt="aboutUsPhoto" style={{width:"100%",height:"250px"}}/>
        <div className="card-body">
          <div className="card-title bg-info bg-gradient py-3 mb-3 mt-3 w-100">
            <div className=" text-center ">
              <h3>NYTTI - National Youth and Technical Training Institude</h3>
            </div>
          </div>

          <p className="card-text text-center">
            A well-known institution of the present time, the National Youth and
            Technical Computer Training Center. Over the last few years we have
            been training a lot of people with a very good reputation.
          </p>
        </div>
      </div>
      <Instructor />
      <OurBranch/>
    </div>
  );
}

export default AboutUs