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
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="container mt-5 custom-slider justify-content-center">
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
