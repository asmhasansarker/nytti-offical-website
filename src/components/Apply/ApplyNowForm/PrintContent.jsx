import React, { Fragment } from 'react'
import { useContext } from 'react'
import { AppliedStudentContext } from '../../../App'
import formHeading from "../../assets/formHeading.png"
// import Loader from '../../Loader/Loader'
// import studentPhoto from '../../assets/ceoPhoto.jpg'

const PrintContent = React.forwardRef((props,ref) => {
  const [appliedStudent] = useContext(AppliedStudentContext)
  console.log(appliedStudent);

  
    const { name, photo, fatherName, motherName, presentAddress, permanentAddress, nid, occupation,dateOfBirth, nationality, bloodGroup, gender, phone, email, guardiansPhone, relationshipWithGuardian, sscSchool, sscBoard, sscYear, sscGpa, hscSchool, hscBoard, hscYear, hscGpa, graduationUniversity, graduationBoard, graduationYear, graduationGpa, postGraduationUniversity, postGraduationBoard, postGraduationYear, postGraduationGpa, referenceName, referencePhone, referenceBatch, referenceRoll,relationWithReference } = appliedStudent
      console.log(name);
    return (
     <Fragment>
        <div ref={ref} className='container'>
        
            <div className='text-center'>
                <img src={formHeading} alt="" className="img-responsive" />
            </div>

            <h2 className="bg-info my-4 py-2 text-light text-center">Application Form</h2>
            <div>
              <p className='text-success'>Application Successfully</p>
            </div>
        

        
         <table className="table border-white">
          <tbody >
            <tr  >
              <td >
                <div>
                  <h5>Name : {name}</h5>
                </div>
              </td>
              <td>
                <div className="float-end">

                  <img src={photo } alt="student Pic" className='img-thumbnail'  style={{width:"250px",height:"200px"}}/>
                </div>
              </td>
             
            </tr>
           
          </tbody>
        </table>
        
        <table className="table table-bordered mt-2">
          <tbody>
            <tr>
              <td >Father's Name</td>
                <td>{fatherName }</td>
              <td>Mother's Name</td>
              <td>{motherName}</td>
            </tr>
            <tr>
              <td >Present Address</td>
                <td>{presentAddress }</td>
              <td>Permanent Address</td>
                <td>{ permanentAddress}</td>
            </tr>
           <tr>
              <td >National ID</td>
              <td>{nid}</td>
              <td>Occupation</td>
              <td>{occupation}</td>
            </tr>
            <tr>
              <td >Date of Birth</td>
              <td>{dateOfBirth}</td>
              <td>Nationality</td>
              <td>{nationality}</td>
            </tr>
            <tr>
              <td >Blood Group</td>
                <td>{ bloodGroup}</td>
              <td>Gender</td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td >Phone</td>
                <td>{ phone }</td>
              <td>Email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td >Guardian Number</td>
              <td>{guardiansPhone}</td>
              <td>Relationship With Guardian</td>
                <td>{ relationshipWithGuardian}</td>
            </tr>
          </tbody>
        </table>

        <h5>Educational Background</h5>

        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Degree</th>
              <th>School/College/University</th>
              <th>Board</th>
              <th>Year of Passing</th>
              <th>Division / GPA</th>
            </tr>
            <tr>
              <td>S.S.C/O Level</td>
                <td>{ sscSchool}</td>
              <td>{sscBoard}</td>
                <td>{ sscYear}</td>
              <td>{sscGpa}</td>
            </tr>
            <tr>
              <td>H.S.C/ Diploma</td>
                <td>{ hscSchool}</td>
              <td>{hscBoard}</td>
                <td>{ hscYear }</td>
                <td>{ hscGpa }</td>
              </tr>
              {
                graduationUniversity !== ""  && (
                  <tr>
              <td>Graduation</td>
                <td>{ graduationUniversity }</td>
                <td>{graduationBoard}</td>
                <td>{ graduationYear}</td>
                <td>{graduationGpa}</td>
            </tr>
                )
              }

              {
                postGraduationUniversity !== "" && (
                    <tr>
                        <td>Post Graduation</td>
                        <td>{postGraduationUniversity}</td>
                        <td>{ postGraduationBoard }</td>
                        <td>{ postGraduationYear }</td>
                        <td>{ postGraduationGpa}</td>
                    </tr>
                )
              }
             
           
           
          </tbody>
        </table>

         <h5>Reference Details</h5>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td >Name</td>
              <td colSpan={2}>{referenceName}</td>
              <td>Mobile Number</td>
              <td colSpan={2}>{referencePhone}</td>
            </tr>

            <tr>
              <td >Batch</td>
              <td>{referenceBatch}</td>
              <td>Roll/ ID No</td>
              <td>{referenceRoll}</td>
              <td>Relation with reference</td>
              <td>{ relationWithReference }</td>
            </tr>
           
          </tbody>
        </table>

        <table className="table border-white" style={{marginTop:"150px"}}>
          <tbody>
            <tr>
              <td >
                <div className='float-start '>
                <h6  style={{borderTop:"1px solid black", width:"200px"}}>Student Signature</h6>
                </div>
              </td>
              
              <td >
                <div className='float-end '>
                  <h6 className='text-end' style={{borderTop:"1px solid black", width:"200px"}}>Authorized Signature</h6>
                </div>
              </td>
              
            </tr>
          </tbody>
        </table>


       

        <div className='bg-info py-1'>
          <h5>www.nytti.com.bd</h5>
        </div>
            
        </div>
    </Fragment>
  )
  }
  
)

export default PrintContent
