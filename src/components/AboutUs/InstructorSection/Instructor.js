import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AllTeachers } from "../../../App";
import { RootApi } from "../../API_Request/ApiRequest";
import ceoPhoto from "../../assets/ceoPhoto.jpg";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const [allTeachers, setAllTeachers] = useContext(AllTeachers);

  useEffect(() => {
    axios
      .get(`${RootApi}api/teachers`)
      .then((res) => setAllTeachers(res.data))
      .catch((err) => console.log(err));
  }, []);

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
              src={ceoPhoto}
              className="img-fluid rounded-start"
              alt="ceoPhoto"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">CEO Name</h5>
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
          <h4>Manager</h4>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Manager Name</h5>
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
              src={ceoPhoto}
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
        {allTeachers.map((teacher, key) => (
            <InstructorCard
                key={teacher._id}
            image={teacher.photo}
            title={teacher.name}
            subject={teacher.instructorOf}
            phone={teacher.phone}
            email={teacher.email}
          />
        ))}

        {/* <InstructorCard image={ceoPhoto} title="Instructor Name" description="a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content" />
                <InstructorCard image={ceoPhoto} title="Instructor Name" description="a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content" />
                <InstructorCard image={ceoPhoto} title="Instructor Name" description="a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content" />
                <InstructorCard image={ceoPhoto} title="Instructor Name" description="a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content" />
                <InstructorCard image={ceoPhoto} title="Instructor Name" description="a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content" /> */}
      </div>
    </>
  );
};

export default Instructor;
