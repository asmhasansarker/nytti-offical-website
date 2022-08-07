
import axios from 'axios';
import React from 'react'
import { Button, Form } from "react-bootstrap";
import { RootApi } from '../../API_Request/ApiRequest';


const UpdateStudentInfo = ({studentInfo,handleClose, setUpdateInfo}) => {

    const handleChange = (e) => {
    setUpdateInfo({
      ...studentInfo,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(studentInfo);
    axios.patch(`${RootApi}api/students/${studentInfo._id}`,{...studentInfo})
        .then(res => setUpdateInfo(res.data))
        .catch(err => console.log(err))

    handleClose();
  };
   

  return (
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name Of Degree/Course </Form.Label>
        <Form.Control
          value={studentInfo.nameOfCourse}
          type="text"
          name="nameOfCourse"
          placeholder="Name of course"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Duration</Form.Label>
        <Form.Control
          value={studentInfo.duration}
          type="text"
          name="duration"
          placeholder="duration"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Result </Form.Label>
        <Form.Control
          value={studentInfo.result}
          type="text"
          name="result"
          placeholder="Result"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Passing Year</Form.Label>
        <Form.Control
          value={studentInfo.passingYear}
          name="passingYear"
          type="number"
          placeholder="passingYear"
          onChange={handleChange}
        />
      </Form.Group>

      

      <div className="d-flex justify-content-between">
        <Button variant="primary" type="submit">
          Update Data
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </div>
    </Form>
  )
}

export default UpdateStudentInfo