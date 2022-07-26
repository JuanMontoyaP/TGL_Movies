import React, {useContext, useEffect, useReducer} from 'react'
import Login from '../Components/Login'
import {useUserContext} from '../context/UserContext'
import FormLayout from '../Components/FormsLayout'
  
  function UserLogin() {
  const {login, ACTIONS, reducer, initialState} = useUserContext()
  const [state, dispatch] = useReducer(reducer, initialState)
  
  console.log('state en userLogin', state)

useEffect(() => {
  dispatch({type: ACTIONS.SIGNUP, 
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

  return (
    <div className="d-flex justify-content-center">
      <FormLayout state={state}>

    <Login/>
    </FormLayout>

    </div>
  )
}

export default UserLogin