import React from "react";
import freeSeminar from "../assets/freeSeminar.jpg";
import freeSeminarLogo from "../assets/freeSeminaLogo.png";

const FreeSeminar = () => {
  return (
    <div className="container col-xxl-8 px-4 ">
      <div>
        <img
          className="d-block mx-auto mb-4"
          src={freeSeminarLogo}
          alt=""
          width="72"
          height="57"
        />

        <h1 className="display-5 fw-bold text-center">Free Seminar</h1>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={freeSeminar}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <div>
            <h4 className="display-7 fw-bold lh-1 mb-3">
              Web Design And Development
            </h4>
            <h6 className="display-9">Date: 17 July 2022</h6>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Register Now
              </button> */}
              <a
                className="btn btn-primary btn-lg"
                href="https://forms.gle/K2n3QqBtLmTnMhQw8"
                role="button"
              >
                Join Free Seminar
              </a>
            </div>
          </div>
          <div className="mt-2">
            <h4 className="display-7 fw-bold lh-1 mb-3">
              Programming For Kids
            </h4>
            <h6 className="display-9">Date: 17 July 2022</h6>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                className="btn btn-primary btn-lg"
                href="https://forms.gle/K2n3QqBtLmTnMhQw8"
                role="button"
              >
                Join Free Seminar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeSeminar;
