import React from "react";
import { Link } from "react-router-dom";

const BannerLeft = () => {
  return (
    <div>
      <h6>নারায়গঞ্জের সেরা আইটি ট্রেনিং ইনস্টিটিউটে</h6>
      <h1>
        ক্যারিয়ার শুরু হোক <br /> এখন থেকেই
      </h1>
      <div>
        <p>
          অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে <b>NYTTI</b>  আইটি ইনস্টিটিউট
          প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের  কোর্সগুলো থেকে আজই বেছে নিন আপনার পছন্দের কোর্স।
        </p>
      </div>
      <div>
        <Link to="/courses">
        <button type="button" className="btn btn-outline-primary me-2 btn-lg">
          Browse Course
        </button>
        </Link>
        
        <button type="button" className="btn btn-outline-success btn-lg">
          Join Free Seminar
        </button>
      </div>
      
    </div>
  );
};

export default BannerLeft;
