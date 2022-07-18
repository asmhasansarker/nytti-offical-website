import React, { useEffect } from 'react'
import customerSupport from '../assets/customerSupport.png'

const ContactUs = () => {
  useEffect(() => {
    document.title="Contact Us"
  })
  return (
    <div className='container'>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-3">
            <img src={customerSupport} className="img-fluid rounded-start" alt="customer support" />
          </div>
          <div className="col-md-9">
            <div className="card-body mt-3">
              <h4 className="card-title">Call Us for any information</h4>
              <h5>(+880) 1575124637</h5>
              <h5>(08 AM - 05 PM)</h5>
              <h4 className="card-title">Email Us for any information</h4>
              <h5>nytti.bd@gmail.com</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='p-3'>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Your email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Your message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div >
            <button className='btn btn-success'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs