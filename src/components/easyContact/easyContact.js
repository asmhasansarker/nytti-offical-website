import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'

import React from "react";
import './easyContact.css'

const EasyContact = () => {
  return (
    <div className="container-fluid bg-danger custom-easyContact">
      <div className="container py-2">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-5 text-white">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <a
                  href="tel:+8801938713358" 
                  style={{ textDecoration: "none", color: "white" }}
                >
                  +8801938713358
                </a>
              </div>
              <div className="col-7 text-white">
                <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
                nytti.bd@gmail.com
              </div>
            </div>
          </div>

          <div className="col  "></div>
        </div>
      </div>
    </div>
  );
};

export default EasyContact;
