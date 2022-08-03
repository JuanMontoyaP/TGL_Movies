import React from 'react';
import { useUserContext } from '../context/UserContext';
import { Button } from 'react-bootstrap';

function LogOut() {
	const { logout, googleUser, setGoogleUser, logOutGoogle } =
		useUserContext();

	function handleLogout() {
		logout();
	}

	function handleSignOut(e) {
		logOutGoogle()
	}

	if (!googleUser) {
		return (
			<Button
				variant='outline-light'
				onClick={() => handleLogout()}>
				Logout
			</Button>
		);
	} else {
		return (
			<Button
				variant='outline-light'
				onClick={(e) => handleSignOut(e)}>
				Logout with google
			</Button>
		);
	}
}

export default LogOut;
