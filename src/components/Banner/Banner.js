import BannerLeft from "./bannerLeft/BannerLeft";
import BannerRight from "./bannerRight/BannerRight";

const Banner = () => {
  return (
    <div className="container my-5">
      <div className="row my-5">
        <div className="col-5">
          <BannerLeft />
        </div>
        <div className="col-7 text-end">
          <div>
            <BannerRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
