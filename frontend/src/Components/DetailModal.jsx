import React, {useState, useEffect} from 'react';
import {
	Modal,
	Card,
	Button,
} from 'react-bootstrap';
import { useMovieContext } from '../context/MoviesContext';
import {useUserContext} from '../context/UserContext'

export default function MovieModal({showModal, movieId}) {
	const { moviesArray, addToFavorites, removeFromFavorites, favMoviesArray, loadFavorites } = useMovieContext();
	const {currentUser, isUserLogged} = useUserContext();
	const [isMovieFav, setIsMovieFav] = useState(false)

	const foundMovie = moviesArray.find(
		(movie) => movie.id == movieId
	);

	function handleAddFavorite(e){
		console.log("EL E DE FAV", e)
		addToFavorites(movieId, currentUser.uid)
		setIsMovieFav(true)
		// setToFav()
	}

	function handleRemoveFavorite(){
		removeFromFavorites(movieId)
		setIsMovieFav(false)
	}

	function setToFav(){
		const movieOnFav = favMoviesArray.some(movie => {
			return movie.id == movieId
		})
		setIsMovieFav(movieOnFav)
	}

useEffect(() => {
	setToFav()
	loadFavorites()
}, [])

	console.log('movie fav', isMovieFav)
	return (
		<>
			<Modal
				show={showModal}
				onHide={() => showModal()}>
				<Card className=''>
					<div className='mt-3 d-flex justify-content-center'>
						<Card.Img style={{width:'50%', objectFit:'cover'}}
							variant='top'
							src={foundMovie.image}
						/>
					</div>
					<Card.Body className='m-1'>
						<Card.Title>
							{foundMovie.title}
						</Card.Title>
						<Card.Text className=''style={{height:'150px', overflow:'auto' }}>
							{foundMovie.description}	
						</Card.Text>
					</Card.Body>
					<span className='d-flex justify-content-around mb-3'>
						{isUserLogged && (!isMovieFav ? <Button variant='outline-danger' 
						onClick={(e)=> handleAddFavorite(e)}
						value={movieId}>
							Save to favorites
						</Button> :
						<Button variant='outline-warning' 
						onClick={(e)=> handleRemoveFavorite(e)}
						value={movieId}>
								Remove From Favorites
						</Button>) }
						<Button
							variant='dark'
							onClick={() => showModal()}>
							Close
						</Button>
					</span>
				</Card>
			</Modal>
		</>
		// <>
		// 	<Modal
		// 		show={showModal}
		// 		onHide={() => showModal()}
		// 		>
		// 		<Card className='mb-3'>
		// 			<Card.Img
		// 				variant='top'
		// 				src={foundMovie.image}
		// 			/>
		// 			<Card.Body className='m-4'>
		// 				<Card.Title>
		// 					{foundMovie.title}
		// 				</Card.Title>
		// 				<Card.Text>
		// 					{foundMovie.description}
		// 				</Card.Text>
		// 			</Card.Body>
		// 			<span className='d-flex justify-content-around'>
		// 				{!isMovieFav ? <Button variant='outline-danger' 
		// 				onClick={(e)=> handleAddFavorite(e)}
		// 				value={movieId}>

		// 					Save to favorites
		// 				</Button> :
		// 				<Button variant='outline-warning' 
		// 				onClick={(e)=> handleRemoveFavorite(e)}
		// 				value={movieId}>
		// 						Remove From Favorites
		// 				</Button> }
		// 				<Button
		// 					variant='dark'
		// 					onClick={() => showModal()}>
		// 					Close
		// 				</Button>
		// 			</span>
		// 		</Card>
		// 	</Modal>
		// </>
	);
}
