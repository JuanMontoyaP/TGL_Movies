//Hooks
import React, { useContext, useState, useEffect, useRef } from 'react'
//Axios
import axios from 'axios'
//JWT Decoder 
import jwt_decode from 'jwt-decode'
//Reducer to manage user forms states
import reducer, {ACTIONS, initialState} from '../reducers/formsReducer'

//Create context
const UserContext = React.createContext()

//Create custom hook to call context
export function useUserContext(){
    return useContext(UserContext)
}

//Context function
export function UserContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState() //sets user info when logged in
    const [homePage, setHomePage] = useState(false) //??? boolean to show or hide searchBar - belongs somewhere else
    const [error, setError] = useState('') //error to show on forms
    const [isUserLogged, setIsUserLogged] = useState(false)
    //Forms refs 
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const nameRef = useRef()

    //CRUD Functions    
        //signup function - used in FormsLayout component
    async function signup(nameBody, emailBody, passwordBody){
        await axios.post('http://localhost:8080/users', {name: nameBody, email: emailBody, password: passwordBody, role: 'USER_ROLE'}) //sends info tu server via POST
        .then( (response) => {
            console.log(response);
          })
          .catch( (error) => {
            console.log(error);
          })
        return console.log(`Sign Up sucessfully! User: ${nameBody}, email: ${emailBody}`)
    }
        //login function - used in FormsLayout component
    async function login(emailBody, passwordBody){
        await axios.post('http://localhost:8080/auth/login', {email: emailBody, password: passwordBody})
        .then( (response) => {
            if(response.status == 200){
                console.log("something", response)
                //stores token on session storage
                sessionStorage.setItem("token", response.data.token)
                setIsUserLogged(true)
            }else{
                return console.log("ERROR!", response.data.msg)
            }
          })
          .catch( (error) => {
            console.log(error);
            setError(error.response.data.msg) // sends user / password incorrect message
            console.log("ERROR", error.response.data.msg)
          })
        return
    }

        //logout function - used in UpdateProfile and Navbar
    function logout(){
        setCurrentUser("")
        sessionStorage.clear()
        setIsUserLogged(false)
        return console.log("Logout sucessfully")
    }

        //update function - used in UpdateProfile
    function updateUser(){
        return console.log("Update sucessfully")
    }
console.log("userlogged", isUserLogged)
    //useEffect that keeps user on currentUser state decoding token
    useEffect(()=>{
        if(isUserLogged){
            //calls token on sessionStorage
            const token = JSON.stringify(sessionStorage.getItem("token"))
            //decodes token
            const tokenDecoded = jwt_decode(token)
            //sets user info on state
            setCurrentUser(tokenDecoded);
            console.log("token decoded", tokenDecoded)
        }
    }, [isUserLogged])
    console.log("current user", currentUser)

    //all the functions and variables that are accesibles throughout the app where userContext is used
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
        setError,
        
    }
    //provider returned to use on AllRoutes
  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
}