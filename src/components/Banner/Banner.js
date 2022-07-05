import BannerLeft from "./bannerLeft/BannerLeft";
// import BannerRight from "./bannerRight/BannerRight";
import bannerOne from '../assets/bannerOne.png'

const Banner = () => {
  return (
    <div className="container py-5">
      <div className="row my-5">
        <div className="col-5">
          <BannerLeft />
        </div>
        <div className="col-7 text-end">
          <div >
            {/* <BannerRight /> */}
            <img src={bannerOne} alt="banner" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
