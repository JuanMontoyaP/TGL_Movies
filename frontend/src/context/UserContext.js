import React, { useContext, useState, useEffect, useRef } from 'react'
import axios from 'axios'
import reducer, {ACTIONS, initialState} from '../Components/formsReducer'

const UserContext = React.createContext()

export function useUserContext(){
    return useContext(UserContext)
}
export function UserContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [homePage, setHomePage] = useState(false)
    const [error, setError] = useState('')


    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const nameRef = useRef()
   
    async function signup(nameBody, emailBody, passwordBody){
        await axios.post('http://localhost:8080/users', {name: nameBody, email: emailBody, password: passwordBody, role: 'USER_ROLE'})
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
        return console.log(`Sign Up sucessfully! User: ${nameBody}, email: ${emailBody}`)
    }
    function login(email, password){
        return console.log(`Login sucessfully! Email: ${email}`)
    }
    function logout(email){
        return console.log("Logout sucessfully")
    }
    function updateUser(){
        return console.log("Update sucessfully")
    }
    useEffect(()=>{
        setCurrentUser("");
        setLoading(false)
    }, [])

    const value = {
        currentUser,
        login,
        logout,
        signup,
        updateUser,
        setHomePage,
        emailRef,
        passwordRef,
        passwordConfirmRef,
        nameRef, 
        ACTIONS, 
        reducer, 
        initialState,
        error,
        setError
    }
  return (
    <UserContext.Provider value={value}>
        {!loading && children}
    </UserContext.Provider>
  )
}