import React, {useReducer, useEffect} from 'react'
import Signup from '../Components/SignUp'
import FormLayout from '../layout/FormsLayout'
import {useUserContext} from '../context/UserContext'

//Children of AllRoutes
function UserSignup() {
  const {signup, ACTIONS, reducer, initialState} = useUserContext()
  const [state, dispatch] = useReducer(reducer, initialState)


  //Calls formReducer to send payload through state to FormsLayout
  useEffect(() => {
    dispatch({type: ACTIONS.SIGNUP, 
              payload: {
                functionality: 'Sign Up', 
                linkNavigation: '/login', 
                submitFunctionFromUserContext: signup, 
                successMsg: 'Sign Up successfully', 
                errorMsg: 'Failed to create an account',
                smallText: 'Already have an account?',
                navigateTo: 'Log In'
              }})
  }, [])
  return (
    <div className="d-flex justify-content-center">
      <FormLayout state={state}>
    <Signup/>
      </FormLayout>
    </div>
  )
}

export default UserSignup