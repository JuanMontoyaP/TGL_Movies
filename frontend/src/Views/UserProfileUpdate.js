import React, {useReducer, useEffect} from 'react'
import ProfileUpdate from '../Components/ProfileUpdate'
import FormLayout from '../layout/FormsLayout'
import {useUserContext} from '../context/UserContext'
import {Navigate} from 'react-router-dom'
//Children of AllRoutes
function UserProfileUpdate() {
  const {updateUser, ACTIONS, reducer, initialState, isUserLogged} = useUserContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  //Calls formReducer to send payload through state to FormsLayout
  useEffect(() => {
    dispatch({type: ACTIONS.UPDATE_PROFILE, 
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

export default UserProfileUpdate