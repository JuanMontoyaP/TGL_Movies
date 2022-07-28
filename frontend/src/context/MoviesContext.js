//Hooks
import React, {
	useContext,
	useState
} from 'react';
//Axios
import axios from 'axios';

//Create context
const MovieContext = React.createContext();

//Create custom hook to call context
export function useMovieContext() {
	return useContext(MovieContext);
}

//Context function
export function MovieContextProvider({children}) {

	//Set in SearchBar component via handleInput function
	const [searchMovie, setSearchMovie] = useState('');
	//State used to map in MoviesCards and show eachMovieCard
	const [moviesArray, setMoviesArray] = useState([]);
    //State used to get array of all genres 
    const [movieGenres, setMovieGenres] = useState([]);
    //State used to save genre selected
    const [genreSelected, setGenreSelected] = useState('')

	//API call to show popular movies
	async function popularMoviesFunction() {
		await axios
			.get('http://localhost:8080/movies/popular')
			.then((response) => {
				console.log('response', response);
				setMoviesArray(response.data.data);
			})
			.catch((error) => console.log(error));
	}

    //API call to get all genres names 
    async function movieGenresFunction() {
		await axios
			.get('http://localhost:8080/movies/genre')
			.then((response) => {
				console.log('response of genre', response);
				setMovieGenres(response.data.data);
			})
			.catch((error) => console.log(error));
	}

	//API call to search movie
	async function searchFunction() {
		await axios
			.get(
				`http://localhost:8080/movies?query=${searchMovie}`
			)
			.then((response) => {
				if(response.data.data.results.length == 0){
                    setMoviesArray([])
                } else {
                    moviesWithPoster(
                        response.data.data.results
                    );
                }
			});
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

    console.log("movies array", moviesArray)
	const value = {
		searchMovie,
		setSearchMovie,
		searchFunction,
		moviesArray,
		popularMoviesFunction,
        movieGenresFunction,
        movieGenres,
        genreSelected, 
        setGenreSelected
	};
	return (
		<MovieContext.Provider value={value}>
			{children}
		</MovieContext.Provider>
	);
}
