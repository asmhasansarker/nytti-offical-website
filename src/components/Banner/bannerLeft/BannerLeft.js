import React from "react";
import { Link } from "react-router-dom";

const BannerLeft = () => {
  return (
    <div>
      <h6>দেশ সেরা আইটি ট্রেনিং ইনস্টিটিউটে</h6>
      <h1>
        ক্যারিয়ার শুরু হোক <br /> দক্ষতার আত্মবিশ্বাসে
      </h1>
      <div>
        <p>
          অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ক্রিয়েটিভ আইটি ইনস্টিটিউট
          প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ৩০টিরও বেশি ট্রেন্ডি
          কোর্স থেকে আজই বেছে নিন আপনার পছন্দের কোর্স।
        </p>
      </div>
      <div>
        <Link to="/courses">
        <button type="button" class="btn btn-outline-primary me-2 btn-lg">
          Browse Course
        </button>
        </Link>
        
        <button type="button" class="btn btn-outline-success btn-lg">
          Join Free Seminar
        </button>
      </div>
      <h6 className="my-3 ">দেশ সেরা আইটি ট্রেনিং ইনস্টিটিউটে</h6>
    </div>
  );
};

export default BannerLeft;
