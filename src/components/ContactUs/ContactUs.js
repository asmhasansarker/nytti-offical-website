import React, { useEffect } from 'react'
import customerSupport from '../assets/customerSupport.png'

const ContactUs = () => {
  useEffect(() => {
    document.title="Contact Us"
  })
  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={customerSupport}
              className="img-fluid rounded-start"
              alt="customer support"
            />
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
      <div className="card my-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.1559246442034!2d90.5165865130479!3d23.67645993248545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7e16cddee15%3A0xa798d5f40228acab!2zRlJJRU5EUyBUT1dFUi4xICjgp6fgp6Yg4Kak4Ka-4Kay4Ka-KQ!5e0!3m2!1sen!2sbd!4v1669262139260!5m2!1sen!2sbd"
          width="100%"
          height="450"
          
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title='nyttibd'
        ></iframe>
      </div>
      <div className="card">
        <div className="p-3">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Your email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Your message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div>
            <button className="btn btn-success">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs