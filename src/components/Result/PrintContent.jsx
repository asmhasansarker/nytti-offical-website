import React, { Fragment } from 'react'
import dateFormat from "dateformat";

import formHeading from "../assets/formHeading.png"
// import Loader from '../../Loader/Loader'
// import studentPhoto from '../../assets/ceoPhoto.jpg'

const PrintContent = React.forwardRef((props,ref) => {
  


  
  let { name,id, photo, fatherName, motherName,nameOfCourse,duration,passingYear,result, dateOfBirth,  } = props.student;

  // dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  dateOfBirth = dateFormat(dateOfBirth, "dS mmmm , yyyy");
    return (
     <Fragment>
        <div ref={ref} className='container'>
        
            <div className='text-center'>
                <img src={formHeading} alt="" className="img-responsive" />
            </div>

            <h2 className="bg-info my-4 py-2 text-light text-center">Mark Sheet</h2>
            
        

        
         <table className="table border-white ">
          <tbody >
            <tr  >
              <td >
                <div>
                  <h5 style={{fontSize: "20px"}}>
                      Roll/ID No: {id}
                  </h5>
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
        
        <table className="table mt-2 table-borderless px-3 " style={{fontSize: "24px"}}>
            <tbody>
              <tr>
                <th >Student's Name</th>
                <td>{name }</td>
              </tr>
              <tr>
                <td >Father's Name</td>
                <td>{fatherName }</td>
              </tr>
              <tr>
                <td>Mother's Name</td>
                <td>{motherName}</td>
              </tr>
              <tr>
                <td>Date of Birth :</td>
                <td>{dateOfBirth}</td>
              </tr>
              <tr>
                <td>Name Of Degree/Course :</td>
                <td>{nameOfCourse}</td>
              </tr>
              <tr>
                <td>Duration :</td>
                <td>{duration}</td>
              </tr>
              <tr>
                <td>Result :</td>
                <td>{result}</td>
              </tr>
              <tr>
                <td>Passing Year :</td>
                <td>{passingYear}</td>
              </tr>
             
           
              
              
              
             
          </tbody>
        </table>


        <table className="table border-white" style={{marginTop:"450px"}}>
          <tbody>
            <tr>
              <td >
                <div className='float-start '>
                <h6  style={{borderTop:"1px solid black", width:"200px", fontSize: "20px"}}>Student Signature</h6>
                </div>
              </td>
              
              <td >
                <div className='float-end '>
                  <h6 className='text-end' style={{borderTop:"1px solid black", width:"200px", fontSize: "20px"}}>Authorized Signature</h6>
                </div>
              </td>
              
            </tr>
          </tbody>
        </table>


       

        <div className='bg-info py-1'>
          <h5>www.nyttibd.com</h5>
        </div>
            
        </div>
    </Fragment>
  )
  }
  
)

export default PrintContent
