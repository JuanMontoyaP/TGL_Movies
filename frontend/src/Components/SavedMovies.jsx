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
				<Row className='mb-0'>
					<Col sm={3}>Poster</Col>
					<Col sm={3}>
						<p>Title</p>
					</Col>
					<Col sm={2}>
						<p>Average Rating</p>
					</Col>
					<Col sm={2}>
						<p>My Rating</p>
					</Col>
				</Row>
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
						/>
					);
				})}
			</Container>
		);
	}
}

export default SavedMovies;
