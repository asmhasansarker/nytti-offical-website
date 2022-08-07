import axios from 'axios';
import React, { Fragment, useState } from 'react'

import { RootApi } from '../API_Request/ApiRequest';
import StudentInfo from './StudentInfo';

const Result = () => {
  const [searchID, setSearchId] = useState("");
  const [student, setStudent] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("form submited", searchID)
    axios.get(`${RootApi}api/students/result/${searchID}`)
        .then(res => {
          setStudent(res.data)
          console.log(res.data)
          setSearchId("")
            })
            .catch(err => console.log(err))
  }
  return (
    <Fragment>
    <div className='container my-4 '>
      <form onSubmit={handleSubmit}>
        <div className="form-group w-25 d-inline-block me-3">
          <label htmlFor="exampleInputEmail1">Enter Student ID</label>
          <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Student ID" value={searchID} onChange={(e) => setSearchId(e.target.value) } /> 
        </div>
        <button type = "submit" className='btn btn-success'>Submit</button>
      </form>
    </div>

      {student.name && <StudentInfo student={student} />}
      
    </Fragment>
  )
}

export default Result
