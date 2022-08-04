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

function SavedMovies() {
	const { isUserLogged } = useUserContext();
	const { savedMoviesArray, loadFavorites, favMoviesArray  } = useMovieContext();

	useEffect(() => {
		loadFavorites()
	}, [])

	if (!isUserLogged) {
		console.log(
			'user logged en update',
			isUserLogged
		);
		return <Navigate to='/login' />;
	} else {
		return (
			<Container fluid className='text-white text-center'>
				<h1>My saved movies</h1>
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
