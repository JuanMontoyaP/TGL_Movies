import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useUserContext} from '../context/UserContext'
function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const usernameRef = useRef()
    const {signup} = useUserContext()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
async function handleSubmit(e){
    e.preventDefault()
    if(passwordConfirmRef.current.value !== passwordRef.current.value){
        return setError('Passwords do not match')
    }
    try {
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        console.log('signup successful')
        alert("Signup successful")

        navigate('/login')
    }
    catch{
        setError('Failed to create an account')
    }
    setLoading(false)
}
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            <Form.Group id="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" ref={usernameRef} />
                </Form.Group>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group className="mb-3" id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button className="w-100" type="Submit" disable={loading}>Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
    </div>
    </>
  )
}

export default Signup