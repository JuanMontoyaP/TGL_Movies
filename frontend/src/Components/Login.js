import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useUserContext} from '../context/UserContext'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useUserContext
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

async function handleSubmit(e){
    e.preventDefault()
    try {
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        console.log("login successful")
        alert("Login successful")
        navigate('/profile')
    }
    catch(error){
        setError('Failed to log in')
        console.log(error)
    }
    setLoading(false)
}
  return (
    <>
    <Card className="w-50">
        <Card.Body >
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group className="mb-3" id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button className="w-100" type="Submit" disable={loading}>Log In</Button>
            </Form>
            <div className="w-100 text-center mt-3">
       <Link to="/forgot-password"> Forgot password? </Link>
    </div>
        </Card.Body>
    <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup"> Sign Up</Link>
    </div>
    </Card>
    </>
  )
}

export default Login