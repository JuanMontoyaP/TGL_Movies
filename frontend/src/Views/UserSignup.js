import React from 'react'
import Signup from '../Components/SignUp'

function UserSignup() {
  //if userLogged show /login and conditional rendering signup or login
  return (
    <div className="d-flex justify-content-center">
    <Signup/>
    </div>
  )
}

export default UserSignup