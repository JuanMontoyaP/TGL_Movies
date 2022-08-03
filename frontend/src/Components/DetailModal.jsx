import React from 'react';
import {
	Modal,
	Card,
	Button,
} from 'react-bootstrap';
import { useMovieContext } from '../context/MoviesContext';
import {useUserContext} from '../context/UserContext'

export default function MovieModal({
	showModal,
	movieId,
}) {
	const { moviesArray, addToFavorites } = useMovieContext();

	const {currentUser} = useUserContext();

	const foundMovie = moviesArray.find(
		(movie) => movie.id == movieId
	);

	function handleAddFavorite(e){
		console.log("EL E DE FAV", e)

		addToFavorites(movieId, currentUser.uid)
	}

	return (
		<>
			<Modal
				show={showModal}
				onHide={() => showModal()}
				>
				<Card className='mb-3'>
					<Card.Img
						variant='top'
						src={foundMovie.image}
					/>
					<Card.Body className='m-4'>
						<Card.Title>
							{foundMovie.title}
						</Card.Title>
						<Card.Text>
							{foundMovie.description}
						</Card.Text>
					</Card.Body>
					<span className='d-flex justify-content-around'>
						<Button variant='outline-danger' 
						onClick={(e)=> handleAddFavorite(e)}
						value={movieId}>

							Save to favorites
						</Button>
						<Button
							variant='dark'
							onClick={() => showModal()}>
							Close
						</Button>
					</span>
				</Card>
			</Modal>
		</>
	);
}
