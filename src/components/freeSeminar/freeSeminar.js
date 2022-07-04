import React from "react";
import freeSeminar from "../assets/freeSeminar.jpg";

const FreeSeminar = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <h2>অংশ নিন ফ্রি সেমিনারে</h2>
          <p>
            ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না?
            জয়েন করুন আমাদের ফ্রি সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে প্রতিটি
            কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। তাছাড়া সেমিনারে উপস্থিত
            এক্সপার্ট কাউন্সেলরের সঙ্গে কথা বলে আপনি যথাযথ কোর্স বেছে নেওয়ার
            সিদ্ধান্ত নিতে পারবেন সহজেই।
          </p>
          <h4>আপকামিং ফ্রি সেমিনার</h4>
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title">Digital Marketing_2</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/" className="btn btn-primary">
                Join
              </a>
            </div>
          </div>
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title">Web Design and Development</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/" className="btn btn-primary">
                Join
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <img src={freeSeminar} alt="free seminar" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default FreeSeminar;
