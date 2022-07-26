import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useUserContext} from '../context/UserContext'
import Pattern from '../assets/dots-patern-white.svg'

function FormLayout({children, state}) {

    const {emailRef, passwordRef, passwordConfirmRef, nameRef, error, setError} = useUserContext()
    // const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

console.log("passref", passwordRef?.current?.value)

const formType = children.type.name

console.log("children", children)

async function handleSubmit(e){
    e.preventDefault()
    if(formType == 'Signup' && passwordConfirmRef?.current?.value !== passwordRef?.current?.value){
        return setError('Passwords do not match')
    }
    try {
        setError('')
        setLoading(true)
        await state?.submitFunctionFromUserContext(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
        console.log(`${state.successMsg}`)
        alert(`${state.successMsg}`)
        navigate(state.linkNavigation)
    }
    catch{
        setError(state.errorMsg)
    }
    setLoading(false)
}



const backgroundPattern = {
    background: `url(${Pattern})`,
    opacity: '0.8',
}
  return (
    <>
    <Card
    text={'light'}
    border='light'
    className="w-50 mb-5 pb-2"
    style={backgroundPattern}
    >
        <Card.Body>
            <h2 className="text-center mb-4">{state?.functionality}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form 
            onSubmit={handleSubmit}>
           {children}
                <Button variant="outline-light" className="w-100" type="Submit" disable={loading}>{state?.functionality}</Button>
            </Form>
        </Card.Body>
    <div className="w-100 text-center mt-2">
        {state?.smallText}   
        <Link to={state?.linkNavigation}>{state?.navigateTo}</Link>
    </div>
    </Card>
    </>
  )
}

export default FormLayout