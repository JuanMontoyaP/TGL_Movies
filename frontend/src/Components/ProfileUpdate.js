import React from 'react'
import {Form} from 'react-bootstrap'
import {useUserContext} from '../context/UserContext'

//Children of UserProfileUpdate on Views
function UpdateProfile() {
    const {emailRef, passwordRef, passwordConfirmRef, currentUser, setError} = useUserContext()

    function handleOnChange(e){
      if (e.target.value.length < 6){
          setError('Password must be at least 6 characters')
          console.log("pass", passwordRef.current.value)
      } else {
          setError('')
      }
  }

  return (
    <>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} onChange={(e)=> handleOnChange(e)}  placeholder='Leave blank to keep the same' />
                </Form.Group>
                <Form.Group className="mb-3" id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} onChange={(e)=> handleOnChange(e)}  placeholder='Leave blank to keep the same'/>
                </Form.Group>
    </>
  )
}

export default UpdateProfile