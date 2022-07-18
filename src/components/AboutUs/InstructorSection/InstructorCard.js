import React from "react";

const InstructorCard = ({image,title,description}) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card my-3">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href="/" className="btn btn-primary">
            Course Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;