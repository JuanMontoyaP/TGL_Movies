import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

export function useUserContext(){
    return useContext(UserContext)
}
export function UserContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [homePage, setHomePage] = useState(false)
   
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
        setHomePage
    }
  return (
    <UserContext.Provider value={value}>
        {!loading && children}
    </UserContext.Provider>
  )
}