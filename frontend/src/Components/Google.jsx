import React from 'react';
import { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';

export default function Google() {
	const { googleLogin } = useUserContext();

	useEffect(() => {
		googleLogin();
	}, []);

	return (
		<>
			<div id='buttonDiv'></div>
		</>
	);
}
