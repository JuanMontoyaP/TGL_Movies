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

	const savedMoviesArray = [
		{
			img: 'https://ww1.cuevana3.me/wp-content/uploads/2022/07/mi-peluqueria-en-rio-60647-poster-200x300.jpg',
			title: 'Mi peluqueria ...',
			avgRating: 5,
			myRating: 4,
			myReview: 'Lorem ipsum...',
		},
		{
			img: 'https://ww1.cuevana3.me/wp-content/uploads/2022/07/animals-60643-poster-213x300.jpg',
			title: 'Animals',
			avgRating: 4,
			myRating: 5,
			myReview: 'Lorem ipsum...',
		},
		{
			img: 'https://ww1.cuevana3.me/wp-content/uploads/2022/07/cinema-sabaya-60567-poster-211x300.jpg',
			title: 'Cinema Sabaya',
			avgRating: 3,
			myRating: 4,
			myReview: 'Lorem ipsum...',
		},
	];

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
