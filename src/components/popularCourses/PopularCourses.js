import React from "react";
import courseLogo from "../assets/popularCourseLogo.jpg";
import PopularCourseSlider from "../PopularCourseSlider/PopularCourseSlider";

const PopularCourses = () => {
  return (
    <div>
      <div className="px-4 py-5  text-center">
        <img
          className="d-block mx-auto mb-4"
          src={courseLogo}
          alt=""
          width="82"
          height="77"
        />
        <h1 className="display-5 fw-bold my-5">জনপ্রিয় কোর্সসমূহ</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি, সেসব
            দিয়েই সাজানো হয়েছে আমাদের কোর্স লিস্ট। এখান থেকে আপনার সুবিধামত
            অনলাইন বা অফলাইনে কোর্সে এনরোল করতে পারবেন যেকোনো সময়।
          </p>
        </div>
        <div className="container mt-5">
          <PopularCourseSlider />
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
