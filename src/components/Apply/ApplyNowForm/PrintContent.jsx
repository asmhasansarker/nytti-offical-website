import React, { Fragment } from 'react'
import { useContext } from 'react'
import { ApplyedStudentContext } from '../../../App'
import formHeading from "../../assets/formHeading.png"

const PrintContent = React.forwardRef((props,ref) => {
    const [applyedStudent, setApplyedStudent] = useContext(ApplyedStudentContext)
    console.log(applyedStudent);
  return (
     <Fragment>
            <div ref={ref} className='container'>
            
                <div className='text-center'>
                    <img src={formHeading} alt="" className="img-responsive" />
                </div>

                <h2 className="bg-info my-4 py-2 text-light text-center">Application Form</h2>
            </div>
    </Fragment>
  )
})

export default PrintContent
