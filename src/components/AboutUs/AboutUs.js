import React, { useEffect } from 'react'
import aboutUsPhoto from '../assets/aboutUsPhoto.jpg'
import Instructor from './InstructorSection/Instructor'

const AboutUs = () => {
  useEffect(() => {
    document.title="About Us"
  })
  return (
    <div className='container'>
      <div className="card mb-3">
        <img src={aboutUsPhoto} className="card-img-top" alt="aboutUsPhoto" />
        <div className="card-body">
        <div className='card-title bg-info bg-gradient py-3 mb-3 mt-3 w-100'>
                <div className=' text-center '>
                    <h3>NYTTI - National Youth and Technical Training Institude</h3>
                </div>
            </div>
          
          <p className="card-text text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

        </div>
      </div>
      <Instructor/>
    </div>
  )
}

export default AboutUs