import React, {useReducer, useEffect} from 'react'
import ProfileUpdate from '../Components/ProfileUpdate'
import FormLayout from '../Components/FormsLayout'
import {useUserContext} from '../context/UserContext'

function UserProfileUpdate() {
  const {updateUser, ACTIONS, reducer, initialState} = useUserContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('state en UserProfileUpdate', state)
  
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
      <FormLayout state={state}>
    <ProfileUpdate/>
      </FormLayout>
    </div>
  )
}

export default UserProfileUpdate