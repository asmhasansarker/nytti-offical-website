import { useEffect } from "react";
import Banner from "./components/Banner/Banner";
import CourseSlider from "./components/courseSlider/CourseSlider";
import BackgroundImage from "./components/custom/background/BackgroundImage";
// import EasyContact from "./components/easyContact/easyContact";
import FreeSeminar from "./components/freeSeminar/freeSeminar";
import NoticeForAdmission from "./components/NoticeForAdmission/NoticeForAdmission";
// import Navigation from "./components/navigation/navigation";
import PopularCourses from "./components/popularCourses/PopularCourses";
import TeacherSlider from "./components/TeacherSlider/TeacherSlider";

function Home() {
  useEffect(() => {
    document.title = "NYTTI - National Youth and Technical Training Institude";
  });
  return (
    <div className="App">
      {/* <EasyContact/> */}
      <NoticeForAdmission></NoticeForAdmission>
      <BackgroundImage>
        {/* <Navigation/> */}
        <Banner />
        <CourseSlider />
      </BackgroundImage>
   
        <TeacherSlider />
    
      <PopularCourses />
      <FreeSeminar />
    </div>
  );
}

export default Home;
