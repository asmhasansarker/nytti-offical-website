import React, { Component } from "react";
import "./popularCourseSlider.css";
import webDesignAndDevelopment from "../assets/webDesignAndDevelopment.jpg";
import digitalMarketing from "../assets/digitalMarketing.jpg";
import msOffice from "../assets/msOfficeMale.jpg";
import kidsProgramming from "../assets/kidsProgramming.jpg";
import CourseCard from "./courseCard";

export default class PopularCourseSlider extends Component {
  render() {
    return (
      <div class="row ">
        <CourseCard
          image={webDesignAndDevelopment}
          title="Web Design And Development"
          description="With supporting text below as a natural lead-in to additional
                content."
        />

        <CourseCard
          image={digitalMarketing}
          title="Digital Marketing"
          description="With supporting text below as a natural lead-in to additional
                content."
        />

        <CourseCard
          image={msOffice}
          title="MS OFFICE"
          description="With supporting text below as a natural lead-in to additional
                content."
        />
        <CourseCard
          image={kidsProgramming}
          title="Programming for KIDS"
          description="With supporting text below as a natural lead-in to additional
                content."
        />
      </div>
    );
  }
}
