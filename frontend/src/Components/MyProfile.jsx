import React from 'react';
import {
	Card,
} from 'react-bootstrap';
//Assets
import Pattern from '../assets/dots-patern-white.svg';

import {useUserContext} from '../context/UserContext'
import { useMovieContext } from '../context/MoviesContext';

function MyProfile() {
const {currentUser} = useUserContext()
const { savedMoviesArray, favMoviesArray  } = useMovieContext();


	const backgroundPattern = {
		background: `url(${Pattern})`,
		opacity: '0.8',
	};
	return (
		<Card
			className='w-100 pb-4 mb-4'
			style={backgroundPattern}
			text='light'>
			<Card.Body>
				<h2 className='text-center mb-4'>
					My Profile
				</h2>
				<h4>Name: {currentUser.name}</h4>
				<h4>Movies saved: {favMoviesArray.length} </h4>
			</Card.Body>
		</Card>
	);
}

export default MyProfile;
