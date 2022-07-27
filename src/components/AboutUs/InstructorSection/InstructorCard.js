import React, { useContext } from "react";
import { UserContext } from "../../../App";

const InstructorCard = ({
  image,
  title,
  phone,
  email,
  subject,
  id,
  handleDelete,
}) => {
  const [user] = useContext(UserContext);
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card my-3">
        <img src={image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body bg-info">
          <h3 className="card-title">{title}</h3>
          <h4>Instructor of {subject}</h4>
          <h6>
            <i className="fa-solid fa-phone"></i> {phone}
          </h6>
          <h6>
            <i className="fa-solid fa-envelope"></i> {email}
          </h6>
          {user.role === "admin" ? (
            <div className="float-end">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
