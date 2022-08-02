import React, {useState} from 'react'
import {Form, Button, InputGroup} from 'react-bootstrap'
import {useUserContext} from '../context/UserContext'
import {Navigate} from 'react-router-dom'
import {FaUserEdit} from 'react-icons/fa'
// import LogOutGoogle from './LogOutGoogle'


//Children of UserProfileUpdate on Views
function ProfileUpdate() {
    const {emailRef, passwordRef, passwordConfirmRef, nameRef, currentUser, setError, isUserLogged, googleUser} = useUserContext()
    const [editEmail, setEditEmail] = useState(false)
    const [updateMsg, setUpdateMsg] = useState('')

    function handleOnChange(e){
      if (e.target.value.length < 6){
          setError('Password must be at least 6 characters')
      } else {
          setError('')
      }
  }

  function handleUpdateMsg(){ 
    setUpdateMsg('Changes will be shown next time you log in')
    setTimeout(()=>{setUpdateMsg('')}, 3000)

  }

  function handleEdit (){
    if (!googleUser){
        setEditEmail(current => !current)
    } else {
        setError("Google users cannot change email")
        setTimeout(()=>{setError('')}, 3000)
    }
    console.log("edit email", editEmail)
  }

if (!isUserLogged){
    return <Navigate to="/login"/>
  } else{

  return (
    <>
                    <Form.Label>Name</Form.Label>
                        <InputGroup id="name">
                    <Form.Control type="text" ref={nameRef}
                    defaultValue={currentUser.name}
                    onChange={()=> handleUpdateMsg()}
                    />
                </InputGroup>
                    <p>{updateMsg}</p>
                    <Form.Label>Email</Form.Label>
                <InputGroup id="email">
                    <Form.Control type="email" ref={emailRef}
                    defaultValue={currentUser.email}
                    disabled={!editEmail}
                    />
                    <Button variant={editEmail ? "light" : "secondary"} onClick={()=> handleEdit()}><FaUserEdit /></Button>
                </InputGroup>
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
}

export default ProfileUpdate