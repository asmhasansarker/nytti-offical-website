import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'

import { AllStudents } from '../../App'
import { RootApi } from '../API_Request/ApiRequest'
import Modal from "react-bootstrap/Modal";
import UpdateStudentInfo from './UpdateStudentInfo/UpdateStudentInfo'

const OurStudents = () => {

  const [allStudents, setAllStudents] = useContext(AllStudents)
  const [updateInfo , setUpdateInfo] = useState({})
  const [fullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  
    useEffect(() => {
        document.title="All Students"
        axios.get(`${RootApi}api/students`)
            .then(res => setAllStudents(res.data))
            .catch(err => console.log(err))
    })
    
  const handleStudentDelete = (id) => {
    console.log(id);
    axios
      .delete(`${RootApi}api/students/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  
  const handleStudentUpdate = (id) => {

    axios.get(`${RootApi}api/students/${id}`)
        .then(res => setUpdateInfo(res.data))
        .catch(err => console.log(err))
    // setFullscreen(breakpoint);
    handleShow()
  }
  return (
    <div className='container'>
      <table className="table table-bordered">
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
            </tr>
        </thead>
              <tbody>
                  {
                      allStudents.map((student, key) => {
                          return (
                               <tr key={student._id}>
                                  <th scope="row">{ student.id }</th>
                                  <td>{ student.name }</td>
                                    <td>{student.email}</td>
                                  <td>{ student.phone}</td>
                                  <td>
                                      <button className="btn btn-outline-success me-2" onClick={() => handleStudentUpdate(student._id)}>Edit</button>
                                      <button className="btn btn-outline-danger" onClick={() => handleStudentDelete(student._id)}>Delete</button>
                                  </td>
                                    </tr>
                          )
                      })
                 } 


                   
           
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose} fullscreen={fullscreen} >
        <Modal.Header closeButton>
          <Modal.Title> Update Info </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateStudentInfo
            handleClose={handleClose}
            studentInfo={updateInfo}
            setUpdateInfo={setUpdateInfo}
          />
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default OurStudents
