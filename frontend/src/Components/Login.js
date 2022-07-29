import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {useUserContext} from '../context/UserContext'

//Children of UserLogin on views
function Login() {

    const { emailRef, passwordRef, setError, isUserLogged } = useUserContext()

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
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group className="mb-3" id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} onChange={(e)=> handleOnChange(e)} required />
                </Form.Group>
                <Button disable={isUserLogged}> Log In with Google </Button>
    </>
  )
}

export default Login