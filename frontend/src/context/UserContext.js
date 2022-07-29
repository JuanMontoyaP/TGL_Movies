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
    const [currentUser, setCurrentUser] = useState({}) //sets user info when logged in
    const [homePage, setHomePage] = useState(false) //??? boolean to show or hide searchBar - belongs somewhere else
    const [error, setError] = useState('') //error to show on forms
    const [isUserLogged, setIsUserLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    //Forms refs 
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const nameRef = useRef()

    //CRUD Functions    
        //signup function - used in FormsLayout component
    async function signup(nameBody, emailBody, passwordBody){

        const registerData = {name: nameBody, 
            email: emailBody, 
            password: passwordBody, 
            role: 'USER_ROLE'}
        await axios.post('http://localhost:8080/users', registerData) //sends info tu server via POST
        .then( (response) => {
            console.log(response);
            setIsLoading(false)
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
                //stores token on local storage
                localStorage.setItem("token", response.data.token)
                localStorage.setItem('user', true)
                currentUserFromToken()
                console.log("current user inside log in function", currentUser)
                setIsUserLogged(true)
                setIsLoading(false)
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
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setIsUserLogged(false)
        setIsLoading(false)
        return console.log("Logout sucessfully")
    }

        //update function - used in UpdateProfile
    function updateUser(){
        return console.log("Update sucessfully")
    }
console.log("userlogged", isUserLogged)


   
//function that keeps user on currentUser state decoding token
async function currentUserFromToken(){
       //calls token on localStorage
       const token = JSON.stringify(localStorage.getItem("token"))
       //decodes token
       if(token !== 'null') {
        console.log("token inside condit", token)
        setIsUserLogged(true)
           try {
            const tokenDecoded = await jwt_decode(token)
           //sets user info on state
           setCurrentUser(tokenDecoded);
           setIsLoading(false)

        //    console.log("current user inside async user context", currentUser)
        //    setIsUserLogged(true)
           console.log("token decoded", tokenDecoded)
           }catch(error){
            console.error("error!!!!", error)
            return null
           }
           
       } else {
        console.log("inside else ", token)
       }
    //    console.log("tokendecoded in function", tokenDecoded)
}

//GOOGLE LOG IN AND LOG OUT
        //login using google
        function googleLogin(){
            /* global google */
            google.accounts.id.initialize({
                client_id:
                  "793428477086-d4vqekhbr8pl8itr8scl4l55405hck1h.apps.googleusercontent.com",
                callback: handleCredentialResponse,
              });
          
              google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
                theme: "outline",
                size: "large",
              });
        }

        //credential response with google
        function handleCredentialResponse(response) {

            const body = { id_token: response.credential };
        
            fetch("http://localhost:8080/auth/google", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            })
              .then((resp) => resp.json())
              .then((resp) => {
                console.log("RESP EN GOOGLE", resp)
                localStorage.setItem("token", resp.token);
              })
              .catch(console.warn);
          }

    //useEffect that keeps user on currentUser state decoding token
    useEffect(()=>{
        currentUserFromToken()
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
        homePage,
        emailRef,
        passwordRef,
        passwordConfirmRef,
        nameRef, 
        ACTIONS, 
        reducer, 
        initialState,
        error,
        setError,
        setIsUserLogged,
        isUserLogged,
        isLoading, 
        currentUserFromToken,
        setIsLoading,
        googleLogin
        
    }
    //provider returned to use on AllRoutes
  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
}