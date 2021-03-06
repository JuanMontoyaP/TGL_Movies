import React, {useReducer, useEffect} from 'react'
import Signup from '../Components/SignUp'
import FormLayout from '../layout/FormsLayout'
import {useUserContext} from '../context/UserContext'
import {Navigate} from 'react-router-dom'


//Children of AllRoutes
function UserSignup() {
  const {signup, ACTIONS, reducer, initialState, isUserLogged} = useUserContext()
  const [state, dispatch] = useReducer(reducer, initialState)


  //Calls formReducer to send payload through state to FormsLayout
  useEffect(() => {
    dispatch({type: ACTIONS.FORM_SUBMIT, 
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

  if (isUserLogged){
    return <Navigate to="/my-profile"/>
  } else{
 
  return (
    <div className="d-flex justify-content-center">
      <FormLayout state={state}>
    <Signup/>
      </FormLayout>
    </div>
  )
  }
}

export default UserSignup
