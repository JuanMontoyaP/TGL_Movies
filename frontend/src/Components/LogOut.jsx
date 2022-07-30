import React from 'react';
import { useUserContext } from '../context/UserContext';
import { Button } from 'react-bootstrap';

function LogOut() {
	const { logout, googleUser, setGoogleUser } =
		useUserContext();

	function handleLogout() {
		logout();
	}

	function handleSignOut(e) {
		/*global google */
		console.log(
			'is this info',
			google.accounts.id
		);
		google.accounts.id.disableAutoSelect();
		google.accounts.id.revoke(
			localStorage.getItem('token'),
			(done) => {
				localStorage.removeItem('token');
				localStorage.removeItem('googleUser');
				setGoogleUser(false);
				console.log('logged out with google');
				window.location = '/';
			}
		);
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
