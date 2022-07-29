import React, {useReducer, useEffect} from 'react'
import ProfileUpdate from '../Components/ProfileUpdate'
import FormLayout from '../layout/FormsLayout'
import {useUserContext} from '../context/UserContext'
import {Navigate} from 'react-router-dom'


//Children of AllRoutes
function UserProfileUpdate() {
  const {updateUser, ACTIONS, reducer, initialState, isUserLogged, currentUser, currentUserFromToken} = useUserContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  //Calls formReducer to send payload through state to FormsLayout
  useEffect(() => {
    dispatch({type: ACTIONS.FORM_SUBMIT, 
              payload: {
                functionality: 'Update Your Profile', 
                linkNavigation: '/profile', 
                submitFunctionFromUserContext: updateUser, 
                successMsg: 'Update successfully', 
                errorMsg: 'Failed to update profile',
                smallText: 'Not sure?',
                navigateTo: 'Cancel'
              }})
  }, [])
  useEffect(()=>{
    currentUserFromToken()
}, [isUserLogged]) 

if (!isUserLogged){
    console.log("user logged en update", isUserLogged)
    return <Navigate to="/login"/>
  } else{
 
    return (
      <div className="d-flex justify-content-center">
    {/* {isUserLogged ? */}
        <FormLayout state={state}>
      <ProfileUpdate/>
        </FormLayout> :
         {/* <Navigate to="/login"/> */}
    // {/*}*/}
      </div>
    )
  }
}

export default UserProfileUpdate