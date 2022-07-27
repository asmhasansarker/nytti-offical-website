import React, { useContext } from "react";
import { UserContext } from "../../App";

const CourseCard = ({
  image,
  title,

  duration,
  fee,
  totalClass,
  id,
  deleteCourse,
}) => {
  const [user] = useContext(UserContext);

  return (
    <div className="col-sm-6 col-md-4">
      <div className="card my-3">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <h6>Course duration : {duration}</h6>
          <h6>Course fee : {fee} TK</h6>
          <h6>Total class : {totalClass}</h6>
          <div className="text-center">
            {user.role === "admin" ? (
              <button
                className="btn btn-danger"
                onClick={() => deleteCourse(id)}
              >
                Delete
              </button>
            ) : (
              <a href="/" className="btn btn-primary">
                Enroll Now
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
