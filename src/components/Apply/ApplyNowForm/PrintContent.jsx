import React, { Fragment } from 'react'
import { useContext } from 'react'
import { ApplyedStudentContext } from '../../../App'
import formHeading from "../../assets/formHeading.png"
import studentPhoto from '../../assets/ceoPhoto.jpg'

const PrintContent = React.forwardRef((props,ref) => {
  const [applyedStudent, setApplyedStudent] = useContext(ApplyedStudentContext)
  setApplyedStudent({})
    console.log(applyedStudent);
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
        
          <div className='row'>
          
            <div className="col-md-9">
              <h5>Name : Student Name</h5>

            </div>
            <div className="col-md-3">

              <img src={studentPhoto } alt="student Pic"  className='img-thumbnail ' style={{width:"200px",height:"200px"}}/>
            </div>
            
        </div>
        
        <table className="table table-bordered mt-2">
          <tbody>
            <tr>
              <td >Father's Name</td>
              <td>Awlad Hossain</td>
              <td>Mother's Name</td>
              <td>Saleha Begum</td>
            </tr>
            <tr>
              <td >Present Address</td>
              <td>Fatullah, Narayanganj</td>
              <td>Permanent Address</td>
              <td>Fatullah, Narayanganj</td>
            </tr>
           <tr>
              <td >National ID</td>
              <td>254485676948</td>
              <td>Occupation</td>
              <td>Date of Birth</td>
            </tr>
            <tr>
              <td >Date of Birth</td>
              <td>22/05/1999</td>
              <td>Nationality</td>
              <td>Bangladeshi</td>
            </tr>
            <tr>
              <td >Blood Group</td>
              <td>A+</td>
              <td>Gender</td>
              <td>Male</td>
            </tr>
            <tr>
              <td >Phone</td>
              <td>01521203643</td>
              <td>Email</td>
              <td>test@gmail.com</td>
            </tr>
            <tr>
              <td >Guardian Number</td>
              <td>0195648744</td>
              <td>Relationship With Guardian</td>
              <td>Father</td>
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
              <td>PDB Secondary School</td>
              <td>Dhaka</td>
              <td>2014</td>
              <td>5.00</td>
            </tr>
            <tr>
              <td>H.S.C/ Diploma</td>
              <td>College</td>
              <td>Dhaka</td>
              <td>2014</td>
              <td>5.00</td>
            </tr>
             <tr>
              <td>Graduation</td>
              <td>College</td>
              <td>Dhaka</td>
              <td>2014</td>
              <td>5.00</td>
            </tr>
             <tr>
              <td>Post Graduation</td>
              <td>College</td>
              <td>Dhaka</td>
              <td>2014</td>
              <td>5.00</td>
            </tr>
           
          </tbody>
        </table>

         <h5>Reference Details</h5>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td >Name</td>
              <td>Awlad Hossain</td>
              <td>Mobile Number</td>
              <td>01705464678</td>
            </tr>

            <tr>
              <td >Batch</td>
              <td>2</td>
              <td>Roll/ ID No</td>
              <td>25474</td>
            </tr>
           
          </tbody>
        </table>

        <div className="row justify-content-between " style={{marginTop:"150px",position:"relative"}}>
          <div className='col-md-3  '>
            <div className="bordered " style={{width:"150px",height:"1px",border:"0.5px solid black"}}></div>
            <h6>Student Signature</h6>
          </div>
          <div className="col-md-6 text-light" >middle</div>
          <div className='col-md-3 style={{position:"absolute",top:"5px",right:"150px"}}'>
            <div className="bordered " style={{width:"180px",height:"1px",border:"0.5px solid black"}}></div>
            <h6 >Authorized Signature</h6>
          </div>
        </div>

        <div className='bg-info py-1'>
          <h5>www.nytti.com.bd</h5>
        </div>
            
        </div>
    </Fragment>
  )
})

export default PrintContent
