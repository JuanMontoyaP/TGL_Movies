import React from 'react';
import {
	Container,
	Row,
	Col,
	Alert
} from 'react-bootstrap';
import { useMovieContext } from '../context/MoviesContext';

function EachMovieSaved(props) {
	const { removeFromFavorites  } = useMovieContext();


			function handleRemoveFav(e){
				e.preventDefault();
				let confirmB = window.confirm('Are you sure you want to remove this movie from your favorites?')
				if (!confirmB){
					console.log("not deleted")
				}else{
					removeFromFavorites(props.id)
					window.location.reload()
				}
			}

	return (
		<Container fluid className='text-white d-flex flex-column'>
			<hr />
			<Row>
				<Col className='text-white d-flex flex-column' sm={3} >
					<img
						src={props.img}
						style={{ maxWidth:'100%' }}
					/>
				</Col>
				<Col sm={3}>
					<h3>{props.title}</h3>
				</Col>
				<Col sm={2}>
					<p>{props.avgRating}</p>
				</Col>
				<Col sm={2}>
					<p>{props.myRating}</p>
				</Col>
				<Col sm={1}>
					<button className='mb-2' onClick={(e)=>handleRemoveFav(e)}>Remove</button>
				</Col>
			</Row>
		</Container>
	);
}

export default EachMovieSaved;
