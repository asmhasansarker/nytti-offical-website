import React, { Fragment } from 'react'
// import { useParams } from 'react-router-dom'
import ApplyNowForm from './ApplyNowForm/ApplyNowForm'
import ApplyNowHeading from './ApplyNowHeading/ApplyNowHeading'

const ApplyNow = () => {
  // const {id} = useParams()
  // const id = params.id;
  // console.log(id);
    return (
      <Fragment>
          <ApplyNowHeading/>
        <ApplyNowForm  />
      </Fragment>
  )
}

export default ApplyNow