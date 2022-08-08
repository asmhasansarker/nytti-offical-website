import React, { Component } from "react";
import Slider from "react-slick";
import teacher1 from "../assets/CEO.JPG";
import teacher2 from "../assets/ceo2.jpg";
// import teacher3 from "../assets/ceo3.jpg";
import teacher3 from "../assets/alaminsir.jpg";
import "./TeacherSlider.css"

export default class TeacherSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
    };
    return (
      <div className="container">
        <div className=" w-25 d-block custom-teacher-slider">
          <Slider {...settings}>
            <div>
              <img
                src={teacher1}
                className="img-fluid img-thumbnail"
                alt="..."
                style={{ width: "250px" }}
              />
            </div>
            <div>
              <img
                src={teacher2}
                className="img-fluid img-thumbnail"
                alt="..."
                style={{ width: "250px" }}
              />
            </div>
            <div>
              <img
                src={teacher3}
                className="img-fluid img-thumbnail"
                alt="..."
                style={{ width: "250px" }}
              />
            </div>
            <div>
              <img
                src={teacher1}
                className="img-fluid img-thumbnail"
                alt="..."
                style={{ width: "250px" }}
              />
            </div>
            <div>
              <img
                src={teacher2}
                className="img-fluid img-thumbnail"
                alt="..."
                style={{ width: "250px" }}
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
