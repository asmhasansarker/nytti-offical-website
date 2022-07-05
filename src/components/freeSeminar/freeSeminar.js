import React from "react";
import freeSeminar from "../assets/freeSeminar.jpg";
import freeSeminarLogo from "../assets/freeSeminaLogo.png";

const FreeSeminar = () => {
  return (
    // <div className="container ">
    //   <div className="row text-center">
    //     <h1 className="mb-5">Free Seminar</h1>
    //   </div>
    //   <div className="row">
    //     <div className="col">
    //       <h2>অংশ নিন ফ্রি সেমিনারে</h2>
    //       <p>
    //         ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না?
    //         জয়েন করুন আমাদের ফ্রি সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি
    //         কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। তাছাড়া সেমিনারে উপস্থিত
    //         এক্সপার্ট কাউন্সেলরের সঙ্গে কথা বলে আপনি যথাযথ কোর্স বেছে নেওয়ার
    //         সিদ্ধান্ত নিতে পারবেন সহজেই।
    //       </p>
    //       <h4>আপকামিং ফ্রি সেমিনার</h4>
    //       <div className="card my-2">
    //         <div className="card-body">
    //           <h5 className="card-title">Digital Marketing_2</h5>
    //           <p className="card-text">
    //             With supporting text below as a natural lead-in to additional
    //             content.
    //           </p>
    //           <a href="/" className="btn btn-primary">
    //             Join
    //           </a>
    //         </div>
    //       </div>
    //       <div className="card my-2">
    //         <div className="card-body">
    //           <h5 className="card-title">Web Design and Development</h5>
    //           <p className="card-text">
    //             With supporting text below as a natural lead-in to additional
    //             content.
    //           </p>
    //           <a href="/" className="btn btn-primary">
    //             Join
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col">
    //       <img src={freeSeminar} alt="free seminar" className="img-fluid" />
    //     </div>
    //   </div>
    // </div>

    <div class="container col-xxl-8 px-4 ">
      <div>
        <img
          class="d-block mx-auto mb-4"
          src={freeSeminarLogo}
          alt=""
          width="72"
          height="57"
        />

        <h1 class="display-5 fw-bold text-center">Free Seminar</h1>
      </div>
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={freeSeminar}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <div>
            <h4 class="display-7 fw-bold lh-1 mb-3">
              Web Design And Development
            </h4>
            <h6 className="display-9">Date: 17 July 2022</h6>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Register Now
              </button>
            </div>
          </div>
          <div className="mt-2">
            <h4 class="display-7 fw-bold lh-1 mb-3">
              Programming For Kids
            </h4>
            <h6 className="display-9">Date: 17 July 2022</h6>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeSeminar;
