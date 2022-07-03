import Banner from "./components/Banner/Banner";
import CourseSlider from "./components/courseSlider/CourseSlider";
import BackgroundImage from "./components/custom/background/BackgroundImage";
import EasyContact from "./components/easyContact/easyContact";
import Navigation from "./components/navigation/navigation";
import PopularCourses from "./components/popularCourses/PopularCourses";

function App() {
  return (
    <div className="App">
      <EasyContact/>
      <BackgroundImage>
        <Navigation/>
        <Banner/>
        <CourseSlider/>
      </BackgroundImage>
      <PopularCourses/>
    </div>
  );
}

export default App;
