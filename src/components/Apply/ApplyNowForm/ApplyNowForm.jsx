import axios from "axios";
import React, { useContext, useState } from 'react'
import { useRef } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { AppliedStudentContext } from "../../../App";
// import { getBase64} from "../../helper/FormHelper";

const ApplyNowForm = () => {
  const [appliedStudent, setAppliedStudent] = useContext(AppliedStudentContext)
  const [startDate, setStartDate] = useState(new Date());
  console.log(appliedStudent);
 
  // const [imageUrl, setImageUrl] = useState(null); 
  const [imageUrl2, setImageUrl2] = useState(null); 

  const handleImageUpload2 = async (event) => { 
    setImageUrl2(event.target.files[0])
    console.log(imageUrl2,"OK");
  }
  

  //  const handleImageUpload =async (event) => {
  //   const imageData = new FormData();
  //   imageData.set("key", "8f57b0a9bdb6595706537b44e69fd4b6");
  //    imageData.append("image", event.target.files[0]);
  //   axios
  //     .post("https://api.imgbb.com/1/upload", imageData)
  //     .then((res) => console.log(res.data.data.image.url))
  //      .catch((err) => console.log(err));

     
  // };

  // handleImageUpload()

      
  
  let nameRef,fatherNameRef, motherNameRef, presentAddressRef, permanentAddressRef, nidRef, occupationRef,
    nationalityRef, bloodGroupRef, genderRef, phoneRef, emailRef, guardiansPhoneRef, relationshipWithGuardianRef, sscSchoolRef, sscBoardRef, sscYearRef, sscGpaRef, hscSchoolRef, hscBoardRef, hscYearRef, hscGpaRef, graduationUniversityRef, graduationBoardRef, graduationYearRef, graduationGpaRef, postGraduationUniversityRef, postGraduationBoardRef, postGraduationYearRef, postGraduationGpaRef, referenceNameRef, referencePhoneRef, referenceBatchRef, referenceRollRef, relationWithReferenceRef = useRef()
  
  
   
  
  
  
  const imgFunc = async() => {
    const imageData = new FormData();
    imageData.set("key", "8fdc32a748229e66ad1c10024ca05678");
     imageData.append("image", imageUrl2);
    const photo = await axios.post("https://api.imgbb.com/1/upload", imageData)
    console.log(photo.data,"photo");
    return photo.data.data.image.url
  }
  
  
  
  const SubmitLogin = async() => {

    let name = nameRef.value;
    let fatherName = fatherNameRef.value;
    let motherName = motherNameRef.value;
    let presentAddress = presentAddressRef.value;
    let permanentAddress = permanentAddressRef.value;
    let nid = nidRef.value;
    let occupation = occupationRef.value;
    let dateOfBirth = startDate;
    let nationality = nationalityRef.value;
    let bloodGroup = bloodGroupRef.value;
    let gender = genderRef.value;
    let phone = phoneRef.value;
    let email = emailRef.value;
    let guardiansPhone = guardiansPhoneRef.value;
    let relationshipWithGuardian = relationshipWithGuardianRef.value;
    let sscSchool = sscSchoolRef.value;
    let sscBoard = sscBoardRef.value;
    let sscYear = sscYearRef.value;
    let sscGpa = sscGpaRef.value;
    let hscSchool = hscSchoolRef.value;
    let hscBoard = hscBoardRef.value;
    let hscYear = hscYearRef.value;
    let hscGpa = hscGpaRef.value;
    let graduationUniversity = graduationUniversityRef.value;
    let graduationBoard = graduationBoardRef.value;
    let graduationYear = graduationYearRef.value;
    let graduationGpa = graduationGpaRef.value;
    let postGraduationUniversity = postGraduationUniversityRef.value;
    let postGraduationBoard = postGraduationBoardRef.value;
    let postGraduationYear = postGraduationYearRef.value;
    let postGraduationGpa = postGraduationGpaRef.value;
    let referenceName = referenceNameRef.value;
    let referencePhone = referencePhoneRef.value;
    let referenceBatch = referenceBatchRef.value;
    let referenceRoll = referenceRollRef.value;
    let relationWithReference = relationWithReferenceRef.value;

    


    // const studentInfo = {
    //   ...newStudentInfo,
    //   studentImage: imageUrl
    // }
    // console.log(imageUrl);

      
    let photo = await imgFunc();
    // let photo ="img"
    console.log(photo);
    let newStudentInfo = {
      name,photo,fatherName,motherName,presentAddress,permanentAddress,nid,occupation,dateOfBirth,nationality,bloodGroup,gender,phone,email,guardiansPhone,relationshipWithGuardian,sscSchool,sscBoard,sscYear,sscGpa,hscSchool,hscBoard,hscYear,hscGpa,graduationUniversity,graduationBoard,graduationYear,graduationGpa,postGraduationUniversity,postGraduationBoard,postGraduationYear,postGraduationGpa,referenceName,referencePhone,referenceBatch,referenceRoll,relationWithReference
    }


    // const data = await axios.post('http://localhost:4000/api/students', {...newStudentInfo})





  await axios.post('http://localhost:4000/api/students', {
    ...newStudentInfo
  })
    .then(function (response) {
    setAppliedStudent(response.data)
      console.log(response.data);
    //  <Navigate to="/" />
  })
  .catch(function (error) {
    console.log(error);
  });



    // fetch('http://localhost:4000/api/students', {
    //   method: "POST",
    //   body: JSON.stringify(newStudentInfo) 
    // }).then(res => res.json())
    //   .then(result => {
    //   console.log("Success : ", result);
    //   })
    //   .catch(error => {
    //     console.log("Error: ", error)
    // })

  }
  return (
    <div className='container'>
      <h3 className='mt-5'>PERSONAL & CONTACT INFORMATION</h3>
      <div>
        <div className='row my-2'>
          <div className='col'><input ref={(input) => nameRef = input} placeholder="Student Name" className="form-control animated fadeInUp" type="text" /></div>
          <div className='col'>
            {/* <input ref={(input) => nameRef = input} placeholder="Student Image" className="form-control animated fadeInUp" type="text" /> */}
            <h6 className='d-inline me-4'>Student Image</h6>
            <input onChange={handleImageUpload2} type="file" className="form-control-file" id="exampleFormControlFile1"></input>
            

          </div>
        </div>
        <div className='row my-2'>
          <div className='col'><input ref={(input) => fatherNameRef = input} placeholder="Father's Name*" className="form-control animated fadeInUp" type="text" /></div>
          <div className='col'><input ref={(input) => motherNameRef = input} placeholder="Mother's Name*" className="form-control animated fadeInUp" type="text" /></div>
        </div>
        <div className='row my-2'>
          <div className='col'><input ref={(input) => presentAddressRef = input} placeholder="Present Address*" className="form-control animated fadeInUp" type="text" /></div>
        </div>
        <div className='row my-2'>
          <div className='col'><input ref={(input) => permanentAddressRef = input} placeholder="Permanent Address*" className="form-control animated fadeInUp" type="text" /></div>
        </div>

        <div className='row my-2'>
          <div className='col'><input ref={(input) => nidRef = input} placeholder="National ID*" className="form-control animated fadeInUp" type="text" /></div>
          <div className='col'><input ref={(input) => occupationRef = input} placeholder="Occupation*" className="form-control animated fadeInUp" type="text" /></div> 
        </div>

        <div className='row my-2'>
          <div className='col'>
            <select ref={(input) => nationalityRef = input} className="form-select" aria-label="Default select example">
                  <option defaultValue>Nationality</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Other Country">Other Counter</option>
                  
            </select>
          </div>
          <div className='col'>
    
            <div>
              <h6 className='d-inline me-4'>Date of Birth</h6>
      
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> 
            </div>
          </div>
          <div className='col'>
                <select ref={(input) => bloodGroupRef = input} className="form-select" aria-label="Default select example">
                    <option defaultValue>Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    
                </select>
              </div>
              <div className='col'>
                <select ref={(input) => genderRef = input} className="form-select" aria-label="Default select example">
                    <option defaultValue>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
              </div>
         
        </div>
        <div className='row my-2'>
          <div className='col'><input ref={(input) => phoneRef = input} placeholder="Phone*" className="form-control animated fadeInUp" type="text" /></div>
          <div className='col'><input ref={(input) => emailRef = input} placeholder="Email*" className="form-control animated fadeInUp" type="text" /></div>
        </div>
        <div className='row my-2'>
          <div className='col'><input ref={(input) => guardiansPhoneRef = input} placeholder="Guardian's Phone*" className="form-control animated fadeInUp" type="text" /></div>
          <div className='col'><input ref={(input) => relationshipWithGuardianRef = input} placeholder="Relationship with the Guardian*" className="form-control animated fadeInUp" type="text" /></div>
        </div>
      </div>

      <h3 className='mt-5 mb-2'>EDUCATIONAL BACKGROUND</h3>

      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Degree</th>
            <th scope="col">School/College/University</th>
            <th scope="col">Board</th>
            <th scope="col">Year of Passing</th>
            <th scope="col">Division / GPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">S.S.C / O Level</th>
            <td><input ref={(input) => sscSchoolRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => sscBoardRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => sscYearRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => sscGpaRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
          </tr>
          <tr>
            <th scope="row">H.S.C / Diploma</th>
            <td><input ref={(input) => hscSchoolRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => hscBoardRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => hscYearRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => hscGpaRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
          </tr>
          <tr>
            <th scope="row">Graduation</th>
            <td><input ref={(input) => graduationUniversityRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => graduationBoardRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => graduationYearRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => graduationGpaRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
          </tr>
          <tr>
            <th scope="row">Post Graduation</th>
            <td><input ref={(input) => postGraduationUniversityRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => postGraduationBoardRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => postGraduationYearRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
            <td><input ref={(input) => postGraduationGpaRef = input} placeholder="" className="form-control animated fadeInUp" type="text" /></td>
          </tr>
        </tbody>
      </table>

      <h3 className='mt-5 mb-2'>REFERENCE DETAILS</h3>
      <div>
        <div className='row my-2'>
          <div className='col'><input ref={(input) => referenceNameRef = input} placeholder="Name" className="form-control animated fadeInUp" type="text" /></div>
        </div>

        <div className='row my-2'>
          <div className='col'><input ref={(input) => referencePhoneRef = input} placeholder="Mobile Number" className="form-control animated fadeInUp" type="text" /></div>
          <div className='col'><input ref={(input) => referenceBatchRef = input} placeholder="Batch" className="form-control animated fadeInUp" type="text" /></div>
        </div>
        <div className='row my-2'>
          <div className='col'><input ref={(input) => referenceRollRef = input} placeholder="Roll/ ID No" className="form-control animated fadeInUp" type="text" /></div>
          <div className='col'><input ref={(input) => relationWithReferenceRef = input} placeholder="Relation with Student" className="form-control animated fadeInUp" type="text" /></div>
        </div>
      </div>
      <Link to="/studentInfo">
       <div className="text-center">
        <button onClick={SubmitLogin} className="btn btn-success">Submit</button>
      </div>
      </Link>
      
     
    </div>
  )
}

export default ApplyNowForm