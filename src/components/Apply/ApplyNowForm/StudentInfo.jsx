import React, { Fragment, useContext } from 'react'
import { AppliedStudentContext } from '../../../App'
import PrintButton from './PrintButton'
// import PrintContent from './PrintContent'




const StudentInfo = () => {

  const [appliedStudent] = useContext(AppliedStudentContext)

  if (appliedStudent === null) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

     
    )
  }

  else {
    return (
      <Fragment>
          <PrintButton />
      </Fragment>
    )
  }
 

}

export default StudentInfo
