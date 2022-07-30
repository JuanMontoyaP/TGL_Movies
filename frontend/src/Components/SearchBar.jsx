import React, { useEffect } from 'react';
import {
	InputGroup,
	Form,
	Button,
} from 'react-bootstrap';
import { FaSearchengin } from 'react-icons/fa';
import { useMovieContext } from '../context/MoviesContext';

//Children of Banner
function SearchBar() {
	const {
		searchMovie,
		setSearchMovie,
		searchFunction,
		popularMoviesFunction,
	} = useMovieContext();

	//Sets each letter on Change into searchMovie to execute Api call
	function handleInput(e) {
		setSearchMovie(e.target.value);
	}

	//Executes API call on movie context only when search movie is modified - when deleted executes popular
	useEffect(() => {
		if (searchMovie.length == 0) {
			popularMoviesFunction();
		} else {
			searchFunction();
		}
	}, [searchMovie]);

	return (
		<InputGroup size='lg' className='mb-3'>
			<Form.Control
				placeholder='Search for your favorite movie!'
				onChange={(e) => handleInput(e)}
				style={{ fontSize: '1.8rem' }}
			/>
			<Button variant='secondary'>
				<FaSearchengin size={50} />
			</Button>
		</InputGroup>
	);
}

export default SearchBar;
