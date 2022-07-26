import axios from "axios";
import React, {  useEffect, useState } from 'react'
import { useRef } from 'react'
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
// import { AllTeachers } from "../../../App";

import { RootApi } from "../../API_Request/ApiRequest";
// import { getBase64} from "../../helper/FormHelper";

const TeacherForm = () => {

  useEffect(() => {
    document.title="Add New Teacher"
  })

//   const [allTeachers, setAllTeachers] = useContext(AllTeachers)

  const [imageUrl2, setImageUrl2] = useState(null); 

  const handleImageUpload2 = async (event) => { 
    setImageUrl2(event.target.files[0])
    console.log(imageUrl2,"OK");
  }
  
  
  let teachersNameRef,instructorOfRef, teachersPhoneRef, teachersEmailRef = useRef()

  
  const imgFunc = async() => {
    const imageData = new FormData();
    imageData.set("key", "8fdc32a748229e66ad1c10024ca05678");
     imageData.append("image", imageUrl2);
    const photo = await axios.post("https://api.imgbb.com/1/upload", imageData)
    console.log(photo.data,"photo");
    return photo.data.data.image.url
  }
  
  
  
  const SubmitLogin = async() => {

    let name = teachersNameRef.value;
    let instructorOf = instructorOfRef.value;
    let phone = teachersPhoneRef.value;
    let email = teachersEmailRef.value;
    


      
    let photo = await imgFunc();

    console.log(photo);
    let newTeacherInfo = {
      name,instructorOf,photo,phone,email
    }



  await axios.post(`${RootApi}api/teachers`, {
    ...newTeacherInfo
  })
    .then(function (response) {
    // setAppliedStudent(response.data)
      console.log(response.data);

  })
  .catch(function (error) {
    console.log(error);
  });



  

  }
  return (
    <div className='container'>
      <h3 className='mt-5'>Add a new Teacher </h3>
      <div>
        <div className='row my-2'>
          <div className='col'><input ref={(input) => teachersNameRef = input} placeholder="Teacher Name" className="form-control animated fadeInUp" type="text" /></div>
          <div className='col'>
            {/* <input ref={(input) => nameRef = input} placeholder="Student Image" className="form-control animated fadeInUp" type="text" /> */}
            <h6 className='d-inline me-4'>Teacher's Image</h6>
            <input onChange={handleImageUpload2} type="file" className="form-control-file" id="exampleFormControlFile1"></input>
            

          </div>
        </div>

        <div className='row my-2'>
          <div className='col'><input ref={(input) => instructorOfRef = input} placeholder="Instructor of ...." className="form-control animated fadeInUp" type="text" /></div>
        </div>


        <div className='row my-2'>
          <div className='col'><input ref={(input) => teachersPhoneRef = input} placeholder="Teacher's Phone*" className="form-control animated fadeInUp" type="text" /></div>
          <div className='col'><input ref={(input) => teachersEmailRef = input} placeholder="Teacher's Email*" className="form-control animated fadeInUp" type="text" /></div>
        </div>
       
      </div>


      <Link to="/about-us">
       <div className="text-center">
        <button onClick={SubmitLogin} className="btn btn-success">Submit</button>
      </div>
      </Link>
      
     
    </div>
  )
}

export default TeacherForm