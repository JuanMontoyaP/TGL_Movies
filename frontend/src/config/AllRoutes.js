import React from 'react'
import UserSignup from '../Views/UserSignup'
import UserLogin from '../Views/UserLogin'
import PrivateRoute from '../Components/PrivateRoute'
import UpdateProfile from '../Views/UpdateProfile'
import PageNotFound from '../Views/PageNotFound'
import GuestRoute from '../Components/GuestRoute'
import Home from '../Views/Home'

import { Routes, Route } from 'react-router-dom'

function AllRoutes(){
  return(
    <div 
    // className="w-100 align-self-center m-5 p-5" style={{maxWidth: '600px'}}
    >
    <Routes>
    <Route exact path="/" element={
        <Home/>}/>
    <Route path="/signup" 
    element={
    //<GuestRoute>
      <UserSignup/>
    //</GuestRoute>
    }/>
    <Route path="/login" 
    element={
    // <GuestRoute>
      <UserLogin/>
    // </GuestRoute>
  }/>
        <Route path="/update-profile" element={
          // <PrivateRoute>
            <UpdateProfile/>
          // </PrivateRoute>
        }/>
    <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
</div>
  )
}
export default AllRoutes