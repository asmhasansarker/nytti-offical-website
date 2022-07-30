import React from 'react'
import skillDevelopment from '../assets/skillDevelopment.jpg'
import softwareDevelopment from '../assets/softwareDevelopment.jpg'
import sellLaptop from '../assets/sellLaptop.jpg'

const OurBranch = () => {
  return (
      <div className='container mb-4'>
          <h1 className="display-5 fw-bold my-5 text-center">Our Branches</h1>
        
          <div className='row'>
            <div className="col-sm-6 col-md-4">
                <div className="card my-3">
                    <img src={skillDevelopment} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title"> Branch One</h5>
                    </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card my-3">
                    <img src={softwareDevelopment} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title"> Branch Two</h5>

                    </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card my-3">
                    <img src={sellLaptop} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title"> Branch Three</h5>
                    </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default OurBranch