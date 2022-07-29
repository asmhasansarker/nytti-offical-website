import {  useEffect } from "react";
// import { UserContext } from "./App";
import Banner from "./components/Banner/Banner";
import CourseSlider from "./components/courseSlider/CourseSlider";
import BackgroundImage from "./components/custom/background/BackgroundImage";
// import EasyContact from "./components/easyContact/easyContact";
import FreeSeminar from "./components/freeSeminar/freeSeminar";
import NoticeForAdmission from "./components/NoticeForAdmission/NoticeForAdmission";
import OurServices from "./components/OurServices/OurServices";
// import Navigation from "./components/navigation/navigation";
import PopularCourses from "./components/popularCourses/PopularCourses";
import TeacherSlider from "./components/TeacherSlider/TeacherSlider";

function Home() {
  // const [ setUser] = useContext(UserContext)
  useEffect(() => {
    document.title = "NYTTI - National Youth and Technical Training Institude";
    // localStorage.setItem("user", "true")
    // const user = JSON.parse(localStorage.getItem("user"));
    // if (user) {
    //   setUser(user)
    // }
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
      <OurServices/>
      <FreeSeminar />
    </div>
  );
}

export default Home;
