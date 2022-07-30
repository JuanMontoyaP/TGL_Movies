import React from 'react'
import { Form } from 'react-bootstrap'
import {useUserContext} from '../context/UserContext'

//Children of UserSignup on views
function Signup() {
    const {emailRef, passwordRef, passwordConfirmRef, nameRef, error, setError} = useUserContext()

    function handleOnChange(e){
        if (e.target.value.length < 6){
            setError('Password must be at least 6 characters')
        } else {
            setError('')
        }
    }
     

  return (
    <>
            <Form.Group id="name">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" ref={nameRef} />
                </Form.Group>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} onChange={(e)=>handleOnChange(e)} required />
                    {/* {error && <span>{error}</span>} */}
                </Form.Group>
                <Form.Group className="mb-3" id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" onChange={(e)=>handleOnChange(e)} ref={passwordConfirmRef} required />
                </Form.Group>
                </>
  )
}

export default Signup