import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { AllStudents } from '../../App'
import { RootApi } from '../API_Request/ApiRequest'

const OurStudents = () => {

    const [allStudents, setAllStudents] = useContext(AllStudents)

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
                                  <th scope="row">{ student._id }</th>
                                  <td>{ student.name }</td>
                                    <td>{student.email}</td>
                                  <td>{ student.phone}</td>
                                  <td>
                                      <button className="btn btn-outline-success me-2">Edit</button>
                                      <button className="btn btn-outline-danger" onClick={() => handleStudentDelete(student._id)}>Delete</button>
                                  </td>
                                    </tr>
                          )
                      })
                 } 


                   
           
        </tbody>
        </table>
    </div>
  )
}

export default OurStudents
