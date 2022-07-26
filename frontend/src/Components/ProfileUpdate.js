import React from 'react'
import {Form} from 'react-bootstrap'
import {useUserContext} from '../context/UserContext'



function UpdateProfile() {
    const {emailRef, passwordRef, passwordConfirmRef, nameRef} = useUserContext()

  return (
    <>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    {/* <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/> */}
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef}  placeholder='Leave blank to keep the same' />
                </Form.Group>
                <Form.Group className="mb-3" id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef}  placeholder='Leave blank to keep the same'/>
                </Form.Group>
    </>
  )
}

export default UpdateProfile