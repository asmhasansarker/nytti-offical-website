import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  let navigate = useNavigate();
    const logoutHandler = () => {
       const token = (localStorage.removeItem('token'));
       console.log(token)
       navigate('/');
    }
  return (
    <div>
        <h1>This is logout page</h1>
        <button onClick={logoutHandler}>Log out</button>
    </div>
    
  )
}

export default Logout;