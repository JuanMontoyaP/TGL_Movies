import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MovieCards from '../Components/MovieCards';
import FilterByGenre from '../Components/FilterByGenre';

//Children of AllRoutes
function Home() {


	return (
		<Container>
			<FilterByGenre />
			<MovieCards />
		</Container>
	);
}

export default Home;
