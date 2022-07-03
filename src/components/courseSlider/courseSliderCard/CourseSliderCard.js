import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import websiteImage from "../../assets/website.png";
import './CourseSliderCard.css'

const CourseSliderCard = () => {
  return (
    <div className="card custom-card " style={{ "width": "13rem", "textAlign": "center"}}>
        <div className="py-4">
          <div className="row justify-content-center">
            <img
              src={websiteImage}
              className="card-img-top py-2"
              alt="webImage"
              style={{ width: "5rem" }}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">
              Card title
            </h5>
          </div>
        </div>
    </div>
  
  
  )

};

export default CourseSliderCard;
