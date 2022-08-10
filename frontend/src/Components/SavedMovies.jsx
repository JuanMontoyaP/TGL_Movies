import React, {useEffect} from 'react';
//router
import { Navigate } from 'react-router-dom';
//bootstrap
import {
	Container,
	Row,
	Col,
} from 'react-bootstrap';
//context
import { useMovieContext } from '../context/MoviesContext';
import { useUserContext } from '../context/UserContext';
//Components
import EachMovieSaved from './EachMovieSaved';

import Pattern from '../assets/dots-patern-white.svg';


function SavedMovies() {
	const { isUserLogged } = useUserContext();
	const { savedMoviesArray, loadFavorites, favMoviesArray  } = useMovieContext();

	useEffect(() => {
		loadFavorites()
	}, [])

	const backgroundPattern = {
		background: `url(${Pattern})`,
		opacity: '0.8',
	};

	if (!isUserLogged) {
		console.log(
			'user logged en update',
			isUserLogged
		);
		return <Navigate to='/login' />;
	} else {
		return (
			<Container fluid className='text-white text-center pt-3' style={backgroundPattern}>
				<h2>My saved movies</h2>
				{(favMoviesArray.length == 0) ? "Start saving your favorite movies!" : 
				""
				}
				{favMoviesArray.map((oneMovie, i) => {
					return (
						<EachMovieSaved
							key={i}
							id={oneMovie.id}
							img={oneMovie.image}
							title={oneMovie.title}
							avgRating={oneMovie.vote_average}
							myRating={oneMovie.myRating}
							favArray = {favMoviesArray}
						/>
					);
				})}
			</Container>
		);
	}
}

export default SavedMovies;
