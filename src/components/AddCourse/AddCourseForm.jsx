import axios from "axios";
import React, {  useEffect, useState } from 'react'
import { useRef } from 'react'
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
// import { AllTeachers } from "../../../App";

import { RootApi } from "../API_Request/ApiRequest";
import { TeacherAddedToast } from "../helper/FormHelper";
// import { getBase64} from "../../helper/FormHelper";

const AddCourseForm = () => {

  useEffect(() => {
    document.title="Add New Course"
  })



  const [imageUrl2, setImageUrl2] = useState(null); 

  const handleImageUpload2 = async (event) => { 
    setImageUrl2(event.target.files[0])
    console.log(imageUrl2,"OK");
  }
  
  
  let courseNameRef,courseDurationRef, totalClassRef, courseFeeRef = useRef()

  
  const imgFunc = async() => {
    const imageData = new FormData();
    imageData.set("key", "8fdc32a748229e66ad1c10024ca05678");
     imageData.append("image", imageUrl2);
    const photo = await axios.post("https://api.imgbb.com/1/upload", imageData)
    console.log(photo.data,"photo");
    return photo.data.data.image.url
  }
  
  
  
  const SubmitLogin = async() => {

    let courseName = courseNameRef.value;
    let courseDuration = courseDurationRef.value;
    let totalClass = totalClassRef.value;
    let courseFee = courseFeeRef.value;
    


      
    let photo = await imgFunc();

    console.log(photo);
    let newCourseInfo = {
      courseName,courseDuration,photo,totalClass,courseFee
    }

      console.log(newCourseInfo
      );


  await axios.post(`${RootApi}api/courses`, {
    ...newCourseInfo
  })
    .then(function (response) {
  
      console.log(response.data);

    })
    .then(TeacherAddedToast("Course Added Successfully."))
  .catch(function (error) {
    console.log(error);
  });



  

  }
  return (
    <div className='container'>
      <h3 className='mt-5'>Add a new Course </h3>
      <div>
        <div className='row my-2'>
          <div className='col'><input ref={(input) => courseNameRef = input} placeholder="Course Name" className="form-control animated fadeInUp" type="text" /></div>
          <div className='col'>
            
            <h6 className='d-inline me-4'>Course Image</h6>
            <input onChange={handleImageUpload2} type="file" className="form-control-file" id="exampleFormControlFile1"></input>
            

          </div>
        </div>

        <div className='row my-2'>
          <div className='col'><input ref={(input) => courseDurationRef = input} placeholder="Course duration...." className="form-control animated fadeInUp" type="text" /></div>
        </div>


        <div className='row my-2'>
          <div className='col'><input ref={(input) => totalClassRef = input} placeholder="Total class" className="form-control animated fadeInUp" type="text" /></div>
          <div className='col'><input ref={(input) => courseFeeRef = input} placeholder="Course Fee" className="form-control animated fadeInUp" type="text" /></div>
        </div>
       
      </div>


      <Link to="">
       <div className="text-center">
        <button onClick={SubmitLogin} className="btn btn-success">Submit</button>
      </div>
      </Link>
      
     
    </div>
  )
}

export default AddCourseForm