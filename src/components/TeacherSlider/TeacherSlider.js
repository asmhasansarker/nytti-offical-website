import React, { Component } from "react";
import Slider from "react-slick";
import teacher from "../assets/ceoPhoto.jpg";
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
                src={teacher}
                className="img-fluid img-thumbnail"
                alt="..."
              />
            </div>
            <div>
              <img
                src={teacher}
                className="img-fluid img-thumbnail"
                alt="..."
              />
            </div>
            <div>
              <img
                src={teacher}
                className="img-fluid img-thumbnail"
                alt="..."
              />
            </div>
            <div>
              <img
                src={teacher}
                className="img-fluid img-thumbnail"
                alt="..."
              />
            </div>
            <div>
              <img
                src={teacher}
                className="img-fluid img-thumbnail"
                alt="..."
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
