import React from 'react';
import {
	Dropdown,
	DropdownButton,
} from 'react-bootstrap';
import { useMovieContext } from '../context/MoviesContext';

function FilterByGenre() {
	const {
		movieGenres,
		genreSelected,
		setGenreSelected,
	} = useMovieContext();

	function handleGenreSelection(e, genre) {
		setGenreSelected(genre);
	}

	return (
		<>
			<DropdownButton
				style={{ borderColor: '#fff' }}
				className='d-flex justify-content-evenly align-items-center'
				variant='dark'
				menuVariant='dark'
				id='dropdown-basic-button'
				title={
					!genreSelected.name
						? 'Filter Movies By Genre'
						: genreSelected.name
				}>
				{movieGenres.map((oneGenre, i) => {
					return (
						<Dropdown.Item
							onClick={(e) =>
								handleGenreSelection(e, oneGenre)
							}
							key={i}>
							{oneGenre.name}
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		</>
	);
}

export default FilterByGenre;
