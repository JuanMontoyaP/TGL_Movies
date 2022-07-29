import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {useUserContext} from '../context/UserContext'
import Google from './Google'

//Children of UserLogin on views
function Login() {

    const { emailRef, passwordRef, setError, isUserLogged } = useUserContext()
console.log("user logged en login", isUserLogged)
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
    < Google />
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group className="mb-3" id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} onChange={(e)=> handleOnChange(e)} required />
                </Form.Group>
                {/* <Button className="w-100" type="Submit" disable={loading}>Log In</Button> */}
           
            {/* <div className="w-100 text-center mt-3">
       <Link to="/forgot-password"> Forgot password? </Link>
    </div>
        <Card.Body>
    <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup"> Sign Up</Link>
    </div>    
    </Card.Body> */}
    </>
  )
}

export default Login