import React, { Fragment } from 'react'

import PrintButton from './PrintButton'
// import PrintContent from './PrintContent'




const StudentInfo = ({student}) => {

  

  if (student.name === null) {
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
        <PrintButton student={ student} />
      </Fragment>
    )
  }
 

}

export default StudentInfo
