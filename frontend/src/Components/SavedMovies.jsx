import React from 'react';
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
	const { savedMoviesArray  } = useMovieContext();


	if (!isUserLogged) {
		console.log(
			'user logged en update',
			isUserLogged
		);
		return <Navigate to='/login' />;
	} else {
		return (
			<Container fluid className='text-white'>
				<h1>My saved movies</h1>
				<Row>
					<Col sm={3}>Poster</Col>
					<Col sm={3}>
						<h3>Title</h3>
					</Col>
					<Col sm={1}>
						<p>Average Rating</p>
					</Col>
					<Col sm={1}>
						<p>My Rating</p>
					</Col>
					<Col sm={3}>
						<p>My Review</p>
					</Col>
				</Row>
				{savedMoviesArray.map((oneMovie, i) => {
					return (
						<EachMovieSaved
							key={i}
							img={oneMovie.img}
							title={oneMovie.title}
							avgRating={oneMovie.avgRating}
							myRating={oneMovie.myRating}
							myReview={oneMovie.myReview}
						/>
					);
				})}
			</Container>
		);
	}
}

export default SavedMovies;
