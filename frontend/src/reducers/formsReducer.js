//Exports actions to have access everywhere
export const ACTIONS = {
    FORM_SUBMIT: 'formSubmit',
    LOGIN:'login',
    UPDATE_PROFILE: 'updateProfile'
  }
  
 export const initialState = {
    functionality: "", //Title and button
    linkNavigation: "", //link to...
    submitFunctionFromUserContext: "", //function in userContext to execute on submit
    successMsg: "", //msg on alert and console.log
    errorMsg: "", //msg on error field and catch
    smallText: "",
    navigateTo: ""
}

//this function sets the data that is used on FormsLayout - not hardcoded for scalability
  export default function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FORM_SUBMIT: 
           return {...state, 
                functionality: action.payload.functionality, 
                linkNavigation: action.payload.linkNavigation, 
                submitFunctionFromUserContext: action.payload.submitFunctionFromUserContext, 
                successMsg: action.payload.successMsg, 
                errorMsg: action.payload.errorMsg,
                smallText: action.payload.smallText,
                navigateTo: action.payload.navigateTo
        };
      default: 
          throw new Error('error');
    }
  }