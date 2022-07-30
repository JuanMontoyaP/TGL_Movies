//Hooks
import React, {
	useContext,
	useState,
} from 'react';
//Axios
import axios from 'axios';

//userContext for loading
import { useUserContext } from './UserContext';

//Create context
const MovieContext = React.createContext();

//Create custom hook to call context
export function useMovieContext() {
	return useContext(MovieContext);
}

//Context function
export function MovieContextProvider({
	children,
}) {
	const { isLoading, setIsLoading } =
		useUserContext();

	//Set in SearchBar component via handleInput function
	const [searchMovie, setSearchMovie] =
		useState('');
	//State used to map in MoviesCards and show eachMovieCard
	const [moviesArray, setMoviesArray] = useState(
		[]
	);
	//State used to get array of all genres
	const [movieGenres, setMovieGenres] = useState(
		[]
	);
	//State used to save genre selected
	const [genreSelected, setGenreSelected] =
		useState('');

	//API call to show popular movies
	async function popularMoviesFunction() {
		try {
			await axios
				.get(
					'http://localhost:8080/movies/popular'
				)
				.then((response) => {
					console.log('response', response);
					setMoviesArray(response.data.data);
					setIsLoading(false);
				})
				.catch((error) => console.log(error));
		} catch (error) {
			console.log('error!', error);
		}
	}

	//API call to get all genres names
	async function movieGenresFunction() {
		try {
			await axios
				.get('http://localhost:8080/movies/genre')
				.then((response) => {
					console.log(
						'response of genre',
						response
					);
					setMovieGenres(response.data.data);
					setIsLoading(false);
				})
				.catch((error) => console.log(error));
		} catch (error) {
			console.log('error!', error);
		}
	}

	//API call to search movie
	async function searchFunction() {
		try {
			await axios
				.get(
					`http://localhost:8080/movies?query=${searchMovie}`
				)
				.then((response) => {
					if (
						response.data.data.results.length == 0
					) {
						setMoviesArray([]);
					} else {
						moviesWithPoster(
							response.data.data.results
						);
						setIsLoading(false);
					}
				})
				.catch((error) => console.log(error));
		} catch (error) {
			console.log('error!', error);
		}
	}
	//Function to filter search results and show only movies with poster/image
	function moviesWithPoster(searchedMovies) {
		const filteredMovies = searchedMovies.filter(
			(oneMovie) => {
				return (
					oneMovie.image !==
					'https://image.tmdb.org/t/p/originalnull'
				);
			}
		);
		return setMoviesArray(filteredMovies);
	}

	//Movies saved array- hardcoded in the meantime for
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

	console.log('movies array', moviesArray);
	const value = {
		searchMovie,
		setSearchMovie,
		searchFunction,
		moviesArray,
		popularMoviesFunction,
		movieGenresFunction,
		movieGenres,
		genreSelected,
		setGenreSelected,
		savedMoviesArray
	};
	return (
		<MovieContext.Provider value={value}>
			{children}
		</MovieContext.Provider>
	);
}
