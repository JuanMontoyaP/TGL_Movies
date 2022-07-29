//Router
import { Routes, Route } from 'react-router-dom'
//Views
import UserSignup from '../Views/UserSignup'
import UserLogin from '../Views/UserLogin'
import UserProfileUpdate from '../Views/UserProfileUpdate'
import SavedMovies from '../Views/SavedMovies'
import Home from '../Views/Home'
import PageNotFound from '../Views/PageNotFound'
//Conditionals 
import GuestRoute from './GuestRoute'
import PrivateRoute from './PrivateRoute'

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
    // <GuestRoute>
      <UserSignup/>
    // </GuestRoute>
    }/>
    <Route path="/login" 
    element={
    // <GuestRoute>
      <UserLogin/>
    // </GuestRoute>
  }/>
        <Route path="/update-profile" element={
          // <PrivateRoute>
            <UserProfileUpdate/>
         // </PrivateRoute>
        }/>
         <Route path="/saved-movies" element={
          // <PrivateRoute>
            <SavedMovies/>
         // </PrivateRoute>
        }/>
    <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
</div>
  )
}
export default AllRoutes