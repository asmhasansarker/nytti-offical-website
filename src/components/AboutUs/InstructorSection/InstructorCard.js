import React from "react";

const InstructorCard = ({image,title,description}) => {
  return (
    <div class="col-sm-6 col-md-4">
      <div class="card my-3">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            {description}
          </p>
          <a href="/" class="btn btn-primary">
            Course Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;