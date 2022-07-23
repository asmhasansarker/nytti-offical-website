import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseSliderCard from "./courseSliderCard/CourseSliderCard";
import './CourseSlider.css'

export default function CourseSlider() {
  var settings = {
    dots: false,
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 500,
  };
  return (
    <Slider
      {...settings}
      className="container  custom-slider justify-content-center d-none"
      style={{ width: "13rem" }}
    >
      <div>
        <CourseSliderCard />
      </div>
      <div>
        <CourseSliderCard />
      </div>
      <div>
        <CourseSliderCard />
      </div>
      <div>
        <CourseSliderCard />
      </div>
      <div>
        <CourseSliderCard />
      </div>
      <div>
        <CourseSliderCard />
      </div>
    </Slider>
  );
}
