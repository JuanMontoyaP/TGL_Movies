import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap'
// import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    // const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
function handleSubmit(e){
    e.preventDefault()
    if(passwordConfirmRef.current.value !== passwordRef.current.value){
        return setError('Passwords do not match')
    }
    const promises = [];
    setError('')
    setLoading(true)
    // if(emailRef.current.value !== currentUser.email){
    //     promises.push(updateEmail(emailRef.current.value))
    // }
    // if(passwordRef.current.value){
    //     promises.push(updatePassword(passwordRef.current.value))
    // }

    Promise.all(promises).then(()=>{
        navigate('/')
    }).catch((error)=>{
        console.log(error)
        setError('Failed to update account')
    }).finally(()=>{
        setError('')
        setLoading(false)
        navigate('/profile')
    })
}
  return (
    <div className="d-flex justify-content-center">
    <Card className="w-50">
        <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
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
                <Button className="w-100" type="Submit" disable={loading}>Update</Button>
            </Form>
        </Card.Body>
    <div className="w-100 text-center mt-2">
     <Link to="/">Cancel</Link>
    </div>
    </Card>
    </div>
  )
}

export default UpdateProfile