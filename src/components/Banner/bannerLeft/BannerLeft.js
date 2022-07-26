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
        <p>সিদ্ধিরগঞ্জ থানাধীন সর্বোচ্চমানের ও সর্ববৃহত একমাত্র প্রতিষ্ঠান </p>
        <p>
          অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে <b>NYTTI</b> আইটি ইনস্টিটিউট
          প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের কোর্সগুলো থেকে আজই
          বেছে নিন আপনার পছন্দের কোর্স। কোর্স শেষে উত্তীর্নদের গনপ্রজাতন্ত্রী
          বাংলাদেশ সরকার কর্তৃক অনুমোদিত সনদ প্রদান করা হয়।
        </p>
      </div>
      <div>
        <Link to="/courses">
          <button type="button" className="btn btn-outline-primary me-2 btn-lg">
            Browse Course
          </button>
        </Link>

        <a
          className="btn btn-outline-success btn-lg"
          href="https://forms.gle/K2n3QqBtLmTnMhQw8"
          role="button"
        >
          Join Free Seminar
        </a>
      </div>
    </div>
  );
};

export default BannerLeft;
