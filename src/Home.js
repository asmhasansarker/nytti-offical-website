import Banner from "./components/Banner/Banner";
// import CourseSlider from "./components/courseSlider/CourseSlider";
import BackgroundImage from "./components/custom/background/BackgroundImage";
import Footer from "./components/Footer/Footer";
// import EasyContact from "./components/easyContact/easyContact";
import FreeSeminar from "./components/freeSeminar/freeSeminar";
// import Navigation from "./components/navigation/navigation";
import PopularCourses from "./components/popularCourses/PopularCourses";

function Home() {
  return (
    <div className="App">
      {/* <EasyContact/> */}
      <BackgroundImage>
        {/* <Navigation/> */}
        <Banner />
        {/* <CourseSlider/> */}
      </BackgroundImage>
      <PopularCourses />
      <FreeSeminar />
      <Footer />
    </div>
  );
}

export default Home;
