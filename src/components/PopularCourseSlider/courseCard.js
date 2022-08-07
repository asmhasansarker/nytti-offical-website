import React, { useContext } from "react";
// import { Link } from "react-router-dom";
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

          <h6>Course duration : {duration ? duration : "3 Month"}</h6>
          <h6>Course fee : {fee ? fee : "3000 "} TK</h6>
          <h6>Total class : {totalClass ? totalClass : "40"}</h6>
          <div className="text-center">
            {user.role === "admin" ? (
              <button
                className="btn btn-danger"
                onClick={() => deleteCourse(id)}
              >
                Delete
              </button>
            ) : (
              <a
                href="https://forms.gle/GPJ8nq5YDEsiYJgX9"
                className="btn btn-primary"
              >
                Enroll Now
              </a>
                // <Link to={`/applyNow/${id}`}>
                //   <button className="btn btn-primary">
                //     Enroll Now
                //  </button>
                // </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
