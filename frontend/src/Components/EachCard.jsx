import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import {useMovieContext} from '../context/MoviesContext'
import DetailModal from './DetailModal'

function EachCard(props) {
	const {moviesArray} = useMovieContext()

	const [mouseOver, setMouseOver] =
		useState(false);
	const [openModal, setOpenModal] =
		useState(false);
	const [movieId, setMovieId] = useState();

	const showModal = function (movieId) {
		setOpenModal(!openModal);
		setMovieId(movieId);
	};

	const foundMovie = moviesArray.find(movie => movie.id == props.movieId);

	function handleMouseOver() {
		setMouseOver(true);
	}
	function handleMouseOut() {
		setMouseOver(false);
	}

	return (
		<>
			<Card
				bg={'secondary'}
        		text={'light'}
				className='m-2 p-2 text-wrap'
				style={{
					width: '15rem', overflow: 'hidden'
				}}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				onClick={() => showModal(props.movieId)}>
				<Card.Img
					style={
						!mouseOver ? {} : { opacity: '0.3' }
					}
					src={foundMovie.image}
				/>
				{mouseOver && (
					<Card.ImgOverlay>
						<Card.Header>
              <Card.Title>
							{foundMovie.title}
              </Card.Title>
						</Card.Header>
						<Card.Text style={{
					height: '240px', overflow: 'hidden'
				}}>
							{foundMovie.description}
						</Card.Text>
					</Card.ImgOverlay>
				)}
			</Card>
			{openModal && (
				<DetailModal
					showModal={showModal}
					movieId={movieId}
				/>
			)}
		</>
	);
}

export default EachCard;
