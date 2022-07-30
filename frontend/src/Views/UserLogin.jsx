import React, { useEffect, useReducer} from 'react'
import Login from '../Components/Login'
import {useUserContext} from '../context/UserContext'
import FormLayout from '../layout/FormsLayout'
import {Navigate} from 'react-router-dom'
  
//Children of AllRoutes
  function UserLogin() {
  const {login, ACTIONS, reducer, initialState, isUserLogged} = useUserContext()
  const [state, dispatch] = useReducer(reducer, initialState)
  
  //Calls formReducer to send payload through state to FormsLayout
useEffect(() => {
  dispatch({type: ACTIONS.FORM_SUBMIT, 
    payload: {
      functionality: 'Log In', 
      linkNavigation: '/signup', 
      submitFunctionFromUserContext: login, 
      successMsg: 'Log In successfully', 
      errorMsg: 'Failed to log in',
      smallText: 'Need an account?',
      navigateTo: 'Sign Up'
    }})
  }, [])

  if (isUserLogged){
    return <Navigate to="/my-profile"/>
  } else{
 
  return (
    <div className="d-flex justify-content-center">
      <FormLayout state={state}>
    <Login/>
    </FormLayout>

    </div>
  )
  }
}

export default UserLogin