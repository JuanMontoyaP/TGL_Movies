//Hooks
import React, { useState } from 'react';
// React Bootstrap components
import {
	Card,
	Button,
	Form,
	Alert,
} from 'react-bootstrap';
//React Router functions
import {
	Link,
	useNavigate,
} from 'react-router-dom';
//User context
import { useUserContext } from '../context/UserContext';
//Assets
import Pattern from '../assets/dots-patern-white.svg';

//This layout sets the standard code for the forms in the app while managing the functions -
        //state comes from formReducer, manages all the data depending on the form that is shown
function FormLayout({ children, state }) {
	//data imported from the userContext
    const {
		emailRef,
		passwordRef,
		passwordConfirmRef,
		nameRef,
		setError,
        error,
        currentUser,
		isUserLogged
	} = useUserContext();

    //state for conditional rendering
	const [loading, setLoading] = useState(false);
    //react router function to redirect
	const navigate = useNavigate();

    //function that manages all the submit buttons for user forms
	async function handleSubmit(e) {
        e.preventDefault();
            //for each form type theres a different function
        const formType = children.type.name;
            //functions for signUp
		if (
			formType == 'Signup' &&
			passwordConfirmRef?.current?.value !==
				passwordRef?.current?.value
		) //checks if password is same as confirmed password 
        {
			return setError('Passwords do not match');

		} else if (formType == 'Signup') {
            try {
                setError(''); 
                setLoading(true); //disables button to avoid more than one request
                //gets data from the formsReducer state (not hardcoded for scalability)
                await state?.submitFunctionFromUserContext(
                    nameRef.current.value,
                    emailRef.current.value,
                    passwordRef.current.value
                );
				navigate(state.linkNavigation); //redirect to login

            } catch {
                setError(state.errorMsg);
            }
    }

	if (formType == 'Login') {
        try{
                //gets data from the formsReducer state (not hardcoded for scalability)
            await state?.submitFunctionFromUserContext(
                emailRef.current.value,
                passwordRef.current.value
            );
				// navigate('/update-profile');
			}catch(error){
				console.error(error)
			}
		}
		setLoading(false);
	}
	
	if(isUserLogged){
		 console.log(`"the user logged is" + ${currentUser.name}`)
	}
    //assets
	const backgroundPattern = {
		background: `url(${Pattern})`,
		opacity: '0.8',
	};
	return (
		<>
			<Card
				text={'light'}
				border='light'
				className='w-50 mb-5 pb-2'
				style={backgroundPattern}>
				<Card.Body>
					<h2 className='text-center mb-4'>
						{state?.functionality}
					</h2>
					{error && (
						<Alert variant='danger'>
							{error}
						</Alert>
					)}
					<Form onSubmit={handleSubmit}>
						{children}
						<Button
							variant='outline-light'
							className='w-100'
							type='Submit'
							disable={loading}>
							{state?.functionality}
						</Button>
					</Form>
				</Card.Body>
				<div className='w-100 text-center mt-2'>
					{state?.smallText}
					<Link to={state?.linkNavigation}>
						{state?.navigateTo}
					</Link>
				</div>
			</Card>
		</>
	);
}

export default FormLayout;
