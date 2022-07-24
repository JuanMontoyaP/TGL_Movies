import React, { useContext, useState, useEffect } from 'react'

const UserContext = React.createContext()

export function useUserContext(){
    return useContext(UserContext)
}
export function UserContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [homePage, setHomePage] = useState(false)
    function signup(username, email, password){
       return console.log(`Sign Up sucessfully! User: ${username}, email: ${email}`)
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