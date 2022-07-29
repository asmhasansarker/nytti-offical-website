import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AllTeachers } from "../../../App";
import { RootApi } from "../../API_Request/ApiRequest";
import ceo from "../../assets/CEO.JPG";
import assDirector from "../../assets/alaminsir.jpg";
import InstructorCard from "./InstructorCard";
// import {TeacherAddedToast} from "../../helper/FormHelper"

const Instructor = () => {
  const [allTeachers, setAllTeachers] = useContext(AllTeachers);

  useEffect(() => {
    axios
      .get(`${RootApi}api/teachers`)
      .then((res) => setAllTeachers(res.data))
      .catch((err) => console.log(err));
  });
  
  const handleDelete = (id) => {
    console.log(id)
    axios
      .delete(`${RootApi}api/teachers/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="card bg-info bg-gradient py-2 mb-3">
        <div className=" text-center ">
          <h4>CEO</h4>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={ceo}
              className="img-fluid rounded-start"
              alt="ceoPhoto"
              // style={{ width: "200px", height: "250px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Engineer Mr. Jahidul Islam</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.versions of Lorem Ipsum. Why do we use it? It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by This
                is a
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-info bg-gradient py-2 mb-3">
        <div className=" text-center ">
          <h4>Assistant director</h4>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Shikder Mohammad Al-Amin</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.versions of Lorem Ipsum. Why do we use it? It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by This
                is a
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={assDirector}
              className="img-fluid rounded-start"
              alt="ceoPhoto"
            />
          </div>
        </div>
      </div>
      <div className="card bg-info bg-gradient py-2">
        <div className=" text-center ">
          <h4>Our Instructors</h4>
        </div>
      </div>
      <div className="row">
        {allTeachers.length > 0 ? (
          allTeachers.map((teacher, key) => (
            <InstructorCard
              key={teacher._id}
              id={teacher._id}
              image={teacher.photo}
              title={teacher.name}
              subject={teacher.instructorOf}
              phone={teacher.phone}
              email={teacher.email}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <div className="d-flex justify-content-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Instructor;
