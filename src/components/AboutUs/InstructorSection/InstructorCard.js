import React from "react";

const InstructorCard = ({image,title,phone,email, subject}) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card my-3">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <h4>Instructor of {subject}</h4>
          <h6>
            <i className="fa-solid fa-phone"></i> {phone}
          </h6>
          <h6>
            <i className="fa-solid fa-envelope"></i> {email}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;