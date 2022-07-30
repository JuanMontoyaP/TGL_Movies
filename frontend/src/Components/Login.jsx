import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useUserContext } from '../context/UserContext';
import Google from './Google';

//Children of UserLogin on views
function Login() {
	const {
		emailRef,
		passwordRef,
		setError,
		isUserLogged,
	} = useUserContext();
	console.log(
		'user logged en login',
		isUserLogged
	);

	function handleOnChange(e) {
		if (e.target.value.length < 6) {
			setError(
				'Password must be at least 6 characters'
			);
		} else {
			setError('');
		}
	}

	return (
		<>
			<Google />
			<Form.Group id='email'>
				<Form.Label>Email</Form.Label>
				<Form.Control
					type='email'
					ref={emailRef}
					required
				/>
			</Form.Group>
			<Form.Group className='mb-3' id='password'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					ref={passwordRef}
					onChange={(e) => handleOnChange(e)}
					required
				/>
			</Form.Group>
		</>
	);
}

export default Login;
